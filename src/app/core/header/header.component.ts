import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user.model';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/shared-services/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	user$: Observable<User>

	constructor(private userService: UserService, private router: Router) { }
	
	ngOnInit(): void {		
		this.user$ = this.userService.getUser()		
	}

	logout(): void {
		this.userService.logout()
		this.user$ = null
		this.router.navigate(['login'])		
	}

}
