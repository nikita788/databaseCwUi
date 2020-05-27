import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarComponent} from './tables/car/car.component';
import {MastersComponent} from './tables/masters/masters.component';


const routes: Routes = [
	{ path: '', pathMatch: 'full', component: CarComponent },
	{ path: 'cars', pathMatch: 'full', component: CarComponent },
	{ path: 'masters', pathMatch: 'full', component: MastersComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }

