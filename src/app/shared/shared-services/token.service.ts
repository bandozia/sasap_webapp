import { Injectable } from '@angular/core';
import * as jwtdecode from 'jwt-decode'
import { User } from '../model/user.model';

const KEY = 'token'

@Injectable({
	providedIn: 'root'
})
export class TokenService {

	constructor() { }

	public hasToken(): boolean {		
		return !!this.getToken()
	}

	public setToken(token: string) {		
		window.localStorage.setItem(KEY, token)
	}

	public getToken(): string {
		return window.localStorage.getItem(KEY)
	}

	public removeToken(): void {
		window.localStorage.removeItem(KEY)
	}

	public decodeToken(): User {
		const token = this.getToken()
		const user = jwtdecode(token) as User		
		return user		
	}
}
