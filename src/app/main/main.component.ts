import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Cars', icon: '', routerLink:'cars'},
      {label: 'Masters', icon: '', routerLink:'masters'},
      {label: 'Services', icon: '', routerLink:'services'},
      {label: 'Works', icon: '', routerLink:'works'}
    ];
  }

}
