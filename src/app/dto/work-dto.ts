import {MasterDto} from './master-dto';
import {CarDto} from './car-dto';
import {ServiceDto} from './service-dto';

export class WorkDto {
	public id: number;
	public date: string;
	public master: MasterDto;
	public car: CarDto;
	public maintenance: ServiceDto;
}

export class WorkDtoCreate {
	public masterId: number;
	public carId: number;
	public maintenanceId: number;
	public workDate: string;
}
