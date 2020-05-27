import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CarDto} from '../dto/car-dto';
import {MasterDto} from '../dto/master-dto';
import {ServiceDto} from '../dto/service-dto';
import {WorkDto} from '../dto/work-dto';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient) { }

  private REST_URL = 'http://localhost:8080';
  public CARS_TABLE = '/cars';
  public MASTERS_TABLE = '/masters';
  public SERVICES_TABLE = '/maintenance';
  public WORKS_TABLE = '/works';

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

  public getServices(): Observable<Array<ServiceDto>> {
    return this.httpClient.get<Array<ServiceDto>>(this.REST_URL + this.SERVICES_TABLE);
  }

  public addService(service: ServiceDto): Observable<ServiceDto> {
    return this.httpClient.post<ServiceDto>(this.REST_URL + this.SERVICES_TABLE, service);
  }

  public updateService(service: ServiceDto): Observable<ServiceDto> {
    return this.httpClient.put<ServiceDto>(this.REST_URL + this.SERVICES_TABLE + '/' + service.id, service);
  }

  public deleteService(service: ServiceDto): Observable<any> {
    return this.httpClient.delete(this.REST_URL + this.SERVICES_TABLE + '/' + service.id);
  }

  //Methods for works

  public getWorks(): Observable<Array<WorkDto>> {
    return this.httpClient.get<Array<WorkDto>>(this.REST_URL + this.WORKS_TABLE);
  }

  public addWork(work: WorkDto): Observable<WorkDto> {
    return this.httpClient.post<WorkDto>(this.REST_URL + this.WORKS_TABLE, work);
  }

  public updateWork(work: WorkDto): Observable<WorkDto> {
    return this.httpClient.put<WorkDto>(this.REST_URL + this.WORKS_TABLE + '/' + work.id, work);
  }

  public deleteWork(work: WorkDto): Observable<any> {
    return this.httpClient.delete(this.REST_URL + this.WORKS_TABLE + '/' + work.id);
  }
}
