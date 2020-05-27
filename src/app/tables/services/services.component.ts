import { Component, OnInit } from '@angular/core';
import {RestService} from '../../services/rest.service';
import {ServiceDto} from '../../dto/service-dto';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private restService: RestService) { }

  public displayDialog: boolean;

  public newService: boolean;
  public service: ServiceDto = new ServiceDto();
  public selectedService: ServiceDto;

  public services: Array<ServiceDto>;
  public cols: any[];

  ngOnInit() {
    this.restService.getServices().subscribe((response) => {
      this.services = response;
    }, (error) => {
      console.log(error);
    });

    this.cols = [
      {field: 'name', header: 'Наименование'},
      {field: 'costOur', header: 'Цена для отечественных машин'},
      {field: 'costForeign', header: 'Цена для импортных машин'}
    ]
  }

  public save() {
    if (this.newService) {
      this.restService.addService(this.service).subscribe((response) => {
        this.services.push(response);
        this.service = null;
        this.displayDialog = false;
      }, (error) => {
        console.log(error);
      });
    } else {
      this.restService.updateService(this.service).subscribe((response) => {
        this.services[this.services.indexOf(this.selectedService)] = response;
        this.service = null;
        this.displayDialog = false;
      }, (error) => {
        console.log(error);
      });
    }
  }

  public delete() {
    this.restService.deleteService(this.selectedService).subscribe(() => {
      const index = this.services.indexOf(this.selectedService);
      this.services = this.services.filter((val, i) => i != index);
      this.service = null;
      this.displayDialog = false;
    });
  }

  public showDialogToAdd() {
    this.newService = true;
    this.service = new ServiceDto();
    this.displayDialog = true;
  }

  public onRowSelect(event) {
    this.newService = false;
    this.service = this.cloneMaster(event.data);
    this.displayDialog = true;
  }

  private cloneMaster(c: ServiceDto): ServiceDto {
    let car = new ServiceDto();
    for (let prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }

}
