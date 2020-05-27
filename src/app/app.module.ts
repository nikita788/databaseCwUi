import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TableModule} from 'primeng/table';
import {RestService} from './services/rest.service';
import {HttpClientModule} from '@angular/common/http';
import {CarComponent} from './tables/car/car.component';
import {AppRoutingModule} from './app-routing.module';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/components/button/button';
import {TabMenuModule} from 'primeng/components/tabmenu/tabmenu';
import { MastersComponent } from './tables/masters/masters.component';
import { MainComponent } from './main/main.component';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import { ServicesComponent } from './tables/services/services.component';
import { WorksComponent } from './tables/works/works.component';

@NgModule({
	declarations: [
		AppComponent,
		CarComponent,
		MastersComponent,
		MainComponent,
		ServicesComponent,
		WorksComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot([]),
		TableModule,
		AppRoutingModule,
		DialogModule,
		BrowserAnimationsModule,
		ButtonModule,
		TabMenuModule,
		TabViewModule
	],
	providers: [RestService],
	bootstrap: [AppComponent]
})
export class AppModule { }
