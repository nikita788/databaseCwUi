import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/components/common/menuitem';
import {Router} from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  public items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Cars', icon: '', command: (event: any) => {
        this.router.navigate(['/cars']);
        }},
      {label: 'Masters', icon: '', command: (event: any) => {
        this.router.navigate(['/masters']);
        }},
      {label: 'Services', icon: ''},
      {label: 'Works', icon: ''}
    ]
  }

}
