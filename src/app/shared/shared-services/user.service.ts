import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user.model'
import { TokenService } from './token.service';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private user$ = new BehaviorSubject<User>(null)

	constructor(private tokenService: TokenService) {
		if (tokenService.hasToken()) {		
			const user = this.tokenService.decodeToken()
			if ((user.exp * 1000) > Date.now())
				this.login(tokenService.getToken())
		}
	}

	public login(token: string) {
		this.tokenService.setToken(token)
		const user = this.tokenService.decodeToken()
		this.user$.next(user)
	}

	public isLoged(): boolean {
		if (this.tokenService.hasToken()) {
			const user = this.tokenService.decodeToken()			
			return (user.exp * 1000) > Date.now()
		} else{
			return false
		}
	}

	public getUser(): Observable<User> {
		return this.user$.asObservable()
	}

	public logout(): void {
		this.tokenService.removeToken();
	}
}
