import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddressReturn } from '../model/address-return.model'
import { Observable } from 'rxjs';

const CEP_SERVER_URL = "https://viacep.com.br/ws/"

@Injectable({
	providedIn: 'root'
})
export class FindCepService {

	constructor(private http: HttpClient) { }

	getAddressFromCep(cep: string): Observable<AddressReturn> {
		return this.http.get<AddressReturn>(CEP_SERVER_URL + cep + '/json')
	}

}
