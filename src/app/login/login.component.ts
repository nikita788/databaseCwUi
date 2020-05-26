import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private router: Router,
	            private authenticationService: AuthenticationService) { }

	public loginForm: FormGroup;
	public loginFailed: boolean;

	ngOnInit() {
		this.createForm();
	}

	get form() {
		return this.loginForm;
	}

	get username() {
		return this.form.controls.username;
	}

	get password() {
		return this.form.controls.password;
	}

	private createForm(): void {
		this.loginForm = new FormGroup({
			username: new FormControl(null, Validators.required),
			password: new FormControl(null, Validators.required)
		});
	}

	public login(): void {
		if (this.form.invalid) {
			return;
		}

		this.authenticationService.login(this.username.value, this.password.value).subscribe(data => {
			this.loginFailed = false;
			this.router.navigate(['/home']);
		}, (error) => {
			this.loginFailed = true;
		});
	}

}
