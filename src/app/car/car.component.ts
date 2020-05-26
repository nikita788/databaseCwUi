import { Component, OnInit } from '@angular/core';
import {RestService} from '../services/rest.service';
import {CarDto} from '../dto/car-dto';

@Component({
	selector: 'app-car',
	templateUrl: './car.component.html',
	styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

	constructor(private restService: RestService) { }

	public cars: Array<CarDto>;

	ngOnInit() {
		this.restService.getCars().subscribe(cars => {
			this.cars = cars;
		});
	}

}
