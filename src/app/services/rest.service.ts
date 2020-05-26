import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarDto} from '../dto/car-dto';

@Injectable({
	providedIn: 'root'
})
export class RestService {

	constructor(private httpClient: HttpClient) { }

	private REST_URL = 'http://localhost:8080';

	public getCars(): Observable<Array<CarDto>> {
		return this.httpClient.get<Array<CarDto>>(this.REST_URL + '/cars');
	}
}
