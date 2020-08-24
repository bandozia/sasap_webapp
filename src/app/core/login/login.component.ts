import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { LoginForm } from './login-form.model'
import { LoginService } from './login.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	formGroup: FormGroup
	waitingResult: boolean = false

	constructor(
		private formBuilder: FormBuilder,
		private loginService: LoginService,
		private router: Router,
		private snackbar: MatSnackBar
	) { }

	ngOnInit(): void {
		this.formGroup = this.formBuilder.group({
			userName: ['', Validators.required],
			pass: ['', Validators.required]
		})
	}

	login(): void {
		this.waitingResult = true
		const loginForm = this.formGroup.getRawValue() as LoginForm

		this.loginService.authenticate(loginForm).subscribe(res => {
			this.router.navigate([''])
		}, err => {
			this.waitingResult = false
			this.formGroup.reset()
			this.snackbar.open('Usuario ou senha invalidos', 'ok', {duration: 3000})
		})
	}

}
