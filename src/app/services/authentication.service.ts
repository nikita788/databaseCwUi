import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserDto} from '../dto/user-dto';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	private currentUserSubject: BehaviorSubject<UserDto>;
	private readonly storageUserKey = 'CURRENT_USER';

	constructor(private httpClient: HttpClient) {

	}

	public get currentUser(): UserDto {
		if (this.currentUserSubject) {
			return this.currentUserSubject.value;
		}

		return null;
	}

	public login(username: string, password: string): Observable<UserDto> {
		return this.httpClient.post<UserDto>('', {username, password})
			.pipe(map((user) => {
				localStorage.setItem(this.storageUserKey, JSON.stringify(user));
				this.currentUserSubject.next(user);
				return user;
			}));
	}

	public logout(): void {
		localStorage.removeItem(this.storageUserKey);
		this.currentUserSubject.next(null);
	}
}
