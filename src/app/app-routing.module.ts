import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarComponent} from './car/car.component';


const routes: Routes = [
	{ path: '', pathMatch: 'full', component: CarComponent },
	{ path: 'cars', pathMatch: 'full', component: CarComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule],
})
export class AppRoutingModule { }

