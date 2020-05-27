import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarComponent} from './tables/car/car.component';
import {MastersComponent} from './tables/masters/masters.component';
import {MainComponent} from './main/main.component';
import {ServicesComponent} from './tables/services/services.component';
import {WorksComponent} from './tables/works/works.component';

const childrenRoutes: Routes = [
	{ path: '', redirectTo: 'cars', pathMatch: 'full' },
	{ path: 'cars',  component: CarComponent },
	{ path: 'masters',  component: MastersComponent},
	{ path: 'services',  component: ServicesComponent},
	{ path: 'works',  component: WorksComponent}
];

const routes: Routes = [
	{ path: '',  component: MainComponent, children: childrenRoutes }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }

