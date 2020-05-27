import {MasterDto} from './master-dto';
import {CarDto} from './car-dto';
import {ServiceDto} from './service-dto';

export class WorkDto {
	public id: number;
	public dateWork: Date;
	public master: MasterDto;
	public car: CarDto;
	public service: ServiceDto;
}
