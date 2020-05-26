import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthenticationService} from '../services/authentication.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

	constructor(private router: Router,
	            private authenticationService: AuthenticationService) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		// const currentUser = this.authenticationService.currentUser;
		// if (currentUser) {
		// 	return true;
		// }
		//
		// this.router.navigate(['login']);
		// return false;

		return true;
	}
}
