import { Component, OnInit } from '@angular/core';
import {RestService} from '../../services/rest.service';
import {WorkDto} from '../../dto/work-dto';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor(private restService: RestService) { }

  public displayDialog: boolean;

  public newWork: boolean;
  public work: WorkDto = new WorkDto();
  public selectedWork: WorkDto;

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
      {field: 'service', header: 'Наименование услуги'}
    ]
  }

  public save() {
    if (this.newWork) {
      this.restService.addWork(this.work).subscribe((response) => {
        this.works.push(response);
        this.work = null;
        this.displayDialog = false;
      }, (error) => {
        console.log(error);
      });
    } else {
      this.restService.updateWork(this.work).subscribe((response) => {
        this.works[this.works.indexOf(this.selectedWork)] = response;
        this.work = null;
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
