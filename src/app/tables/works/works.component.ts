import { Component, OnInit } from '@angular/core';
import {RestService} from '../../services/rest.service';
import {WorkDto, WorkDtoCreate} from '../../dto/work-dto';
import {MasterDto} from '../../dto/master-dto';
import {zip} from 'rxjs/internal/observable/zip';
import {ServiceDto} from '../../dto/service-dto';
import {CarDto} from '../../dto/car-dto';
import {CalcAvgDto} from '../../dto/calc-avg-dto';
import {Message} from 'primeng/components/common/message';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor(private restService: RestService) { }

  public displayDialog: boolean;
  public displayCalcAvg: boolean;

  public calcAvgDto: CalcAvgDto = new CalcAvgDto();
  public messages: Array<Message>;

  public newWork: boolean;
  public work: WorkDto = new WorkDto();
  public selectedWork: WorkDto;

  public masters: Array<MasterDto>;
  public services: Array<ServiceDto>;
  public cars: Array<CarDto>;

  public selectedMaster: MasterDto;
  public selectedCar: CarDto;
  public selectedService: ServiceDto;

  public works: Array<WorkDto>;
  public cols: any[];

  ngOnInit() {
    this.restService.getWorks().subscribe((response) => {
      this.works = response;
    }, (error) => {
      console.log(error);
    });

    this.cols = [
      {field: 'dateWork', header: 'Дата проведения работы'},
      {field: 'master', header: 'ФИО мастера'},
      {field: 'car', header: 'Марка машины и ее госномер'},
      {field: 'maintenance', header: 'Наименование услуги'}
    ];

    this.loadDataForDropdown();
  }

  private loadDataForDropdown() {
    zip(this.restService.getMasters(),
        this.restService.getCars(),
        this.restService.getServices()).subscribe(([masters, cars, services]) => {
          this.masters = masters;
          this.cars = cars;
          this.services = services;
    });
  }

  public save() {
    if (this.newWork) {
      const workDtoCreate = new WorkDtoCreate();
      workDtoCreate.masterId = this.selectedMaster.id;
      workDtoCreate.carId = this.selectedCar.id;
      workDtoCreate.maintenanceId = this.selectedService.id;
      workDtoCreate.workDate = this.work.date;
      this.restService.addWork(workDtoCreate).subscribe((response) => {
        this.works.push(response);
        this.selectedMaster = null;
        this.selectedCar = null;
        this.selectedService = null;
        this.displayDialog = false;
      }, (error) => {
        console.log(error);
      });
    }
  }

  public delete() {
    this.restService.deleteWork(this.selectedWork).subscribe(() => {
      const index = this.works.indexOf(this.selectedWork);
      this.works = this.works.filter((val, i) => i != index);
      this.work = null;
      this.displayDialog = false;
    });
  }

  public showDialogToAdd() {
    this.newWork = true;
    this.work = new WorkDto();
    this.displayDialog = true;
  }

  public showDialogToCalcAvg() {
    this.displayCalcAvg = true;
  }

  public calculate() {
    this.restService.calcAvgCost(this.calcAvgDto).subscribe((response) => {
      this.showMessage(response);
    }, (error) => {
      console.log(error);
    });
  }

  private showMessage(costs: any) {
    this.messages = new Array<Message>();
    this.messages.push({severity:'info', summary:'Total cost for foreign cars', detail: costs.costForeign});
    this.messages.push({severity:'info', summary:'Total cost for our cars', detail: costs.costOur})
  }

  public onRowSelect(event) {
    this.newWork = false;
    this.work = this.cloneWork(event.data);
    this.displayDialog = true;
  }

  private cloneWork(c: WorkDto): WorkDto {
    let car = new WorkDto();
    for (let prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }

}
