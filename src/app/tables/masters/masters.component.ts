import { Component, OnInit } from '@angular/core';
import {MasterDto} from '../../dto/master-dto';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent implements OnInit {

  constructor(private restService: RestService) { }

  public displayDialog: boolean;

  public newMaster: boolean;
  public master: MasterDto = new MasterDto();
  public selectedMaster: MasterDto;

  public masters: Array<MasterDto>;
  public cols: any[];

  ngOnInit() {
    this.restService.getMasters().subscribe((response) => {
      this.masters = response;
    }, (error) => {
      console.log(error);
    });

    this.cols = [
      {field: 'name', header: 'Имя'}
    ]
  }

  public save() {
    if (this.newMaster) {
      this.restService.addMaster(this.master).subscribe((response) => {
        this.masters.push(response);
        this.master = null;
        this.displayDialog = false;
      }, (error) => {
        console.log(error);
      });
    } else {
      this.restService.updateMaster(this.master).subscribe((response) => {
        this.masters[this.masters.indexOf(this.selectedMaster)] = response;
        this.master = null;
        this.displayDialog = false;
      }, (error) => {
        console.log(error);
      });
    }
  }

  public delete() {
    this.restService.deleteMaster(this.selectedMaster).subscribe(() => {
      const index = this.masters.indexOf(this.selectedMaster);
      this.masters = this.masters.filter((val, i) => i != index);
      this.master = null;
      this.displayDialog = false;
    });
  }

  public showDialogToAdd() {
    this.newMaster = true;
    this.master = new MasterDto();
    this.displayDialog = true;
  }

  public onRowSelect(event) {
    this.newMaster = false;
    this.master = this.cloneMaster(event.data);
    this.displayDialog = true;
  }

  private cloneMaster(c: MasterDto): MasterDto {
    let car = new MasterDto();
    for (let prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }

}
