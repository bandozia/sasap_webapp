import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators'
import { UserService } from '../../shared/shared-services/user.service'
import { LoginForm } from './login-form.model'
import { environment } from '../../../environments/environment'

const AUTH_URL = `${environment.API_URL}/auth`

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	constructor(private http: HttpClient, private userService: UserService) { }

	public authenticate(form: LoginForm) {						
		return this.http.post(AUTH_URL, form, {
			responseType: 'text',
			observe: 'body'
		})
		.pipe(tap(token => {
			this.userService.login(token)
		}))		
	}
}
