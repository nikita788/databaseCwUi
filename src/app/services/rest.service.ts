import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CarDto} from '../dto/car-dto';
import {MasterDto} from '../dto/master-dto';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient) { }

  private REST_URL = 'http://localhost:8080';
  private CARS_TABLE = '/cars';
  private MASTERS_TABLE = '/masters';
  private SERVICES_TABLE = '/services';
  private WORKS_TABLE = '/works';

  //Methods for cars

  public getCars(): Observable<Array<CarDto>> {
    return this.httpClient.get<Array<CarDto>>(this.REST_URL + this.CARS_TABLE);
  }

  public addCar(car: CarDto): Observable<CarDto> {
    return this.httpClient.post<CarDto>(this.REST_URL + this.CARS_TABLE, car);
  }

  public updateCar(car: CarDto): Observable<CarDto> {
    return this.httpClient.put<CarDto>(this.REST_URL + this.CARS_TABLE + '/' + car.id, car);
  }

  public deleteCar(car: CarDto): Observable<any> {
    return this.httpClient.delete(this.REST_URL + this.CARS_TABLE + '/' + car.id);
  }

  // Methods for masters

  public getMasters(): Observable<Array<MasterDto>> {
    return this.httpClient.get<Array<MasterDto>>(this.REST_URL + this.MASTERS_TABLE);
  }

  public addMaster(master: MasterDto): Observable<MasterDto> {
    return this.httpClient.post<MasterDto>(this.REST_URL + this.MASTERS_TABLE, master);
  }

  public updateMaster(master: MasterDto): Observable<MasterDto> {
    return this.httpClient.put<MasterDto>(this.REST_URL + this.MASTERS_TABLE + '/' + master.id, master);
  }

  public deleteMaster(master: MasterDto): Observable<any> {
    return this.httpClient.delete(this.REST_URL + this.MASTERS_TABLE + '/' + master.id);
  }

  //Methods for services


}
