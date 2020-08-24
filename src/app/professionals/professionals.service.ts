import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'

import { Professional } from './model/professional.model'
import { PagedResult } from '../shared/model/paged-result.model'

const PROFESSIONALS_URL = `${environment.API_URL}/professionals`

@Injectable({
	providedIn: 'root'
})
export class ProfessionalsService {

	constructor(private http: HttpClient) { }

	public register(professional: Professional) {		
		return this.http.post(PROFESSIONALS_URL, professional)
	}

	public getAllPaged(page: number = 0, size: number = 10): Observable<PagedResult<Professional>> {
		return this.http.get<PagedResult<Professional>>(PROFESSIONALS_URL, {
			params: {page: page.toString(), size: size.toString()}
		})
	}
	
	public searchPaged(search:string, page: number = 0, size: number = 10): Observable<PagedResult<Professional>> {
		return this.http.get<PagedResult<Professional>>(PROFESSIONALS_URL, {
			params: {
				page: page.toString(), 
				size: size.toString(), 
				sort: 'score',
				name: search
			}
		})
	}

	public professionalMicroSearch(name: string): Observable<Professional[]> {
		return this.http.get<Professional[]>(PROFESSIONALS_URL + "/microsearch", {
			params: {name}
		})
	}

}
