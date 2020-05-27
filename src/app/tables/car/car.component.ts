import {RestService} from '../../services/rest.service';
import { Component, OnInit } from '@angular/core';
import {CarDto} from '../../dto/car-dto';

@Component({
	selector: 'app-car',
	templateUrl: './car.component.html',
	styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

	constructor(private restService: RestService) { }

	public displayDialog: boolean;

	public car: CarDto = new CarDto();
	public selectedCar: CarDto;
	public newCar: boolean;

	public cars: Array<CarDto>;
	public cols: any[];

	ngOnInit() {
		this.restService.getCars().subscribe(cars => {
			this.cars = cars;
		});

		this.cols = [
			{field: 'number', header: 'Номер'},
			{field: 'mark', header: 'Марка'},
			{field: 'color', header: 'Цвет'},
			{field: 'foreign', header: 'Зарубежная'}
		]
	}

	public showDialogToAdd() {
		this.newCar = true;
		this.car = new CarDto();
		this.displayDialog = true;
	}

	public onRowSelect(event) {
		this.newCar = false;
		this.car = this.cloneCar(event.data);
		this.displayDialog = true;
	}

	private cloneCar(c: CarDto): CarDto {
		let car = new CarDto();
		for (let prop in c) {
			car[prop] = c[prop];
		}
		return car;
	}

	public save() {
		if (this.newCar) {
			this.restService.addCar(this.car).subscribe((response) => {
				this.cars.push(response);
				this.car = null;
				this.displayDialog = false;
			}, (error) => {
				console.log(error);
			});
		} else {
			this.restService.updateCar(this.car).subscribe((response) => {
				this.cars[this.cars.indexOf(this.selectedCar)] = response;
				this.car = null;
				this.displayDialog = false;
			}, (error) => {
				console.log(error);
			});
		}
	}

	public delete() {
		this.restService.deleteCar(this.selectedCar).subscribe(() => {
			const index = this.cars.indexOf(this.selectedCar);
			this.cars = this.cars.filter((val, i) => i != index);
			this.car = null;
			this.displayDialog = false;
		}, (error) => {
			console.log(error);
		});
	}

}
