import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  public addCar(car: CarDto): Observable<CarDto> {
    return this.httpClient.post<CarDto>(this.REST_URL + '/cars', car);
  }

  public updateCar(car: CarDto): Observable<CarDto> {
    return this.httpClient.put<CarDto>(this.REST_URL + '/cars/' + car.id, car);
  }

  public deleteCar(car: CarDto): Observable<any> {
    return this.httpClient.delete(this.REST_URL + '/cars/' + car.id);
  }
}
