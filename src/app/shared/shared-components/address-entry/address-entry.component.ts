import { Component, OnInit, Output, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from '../../model/address.model';
import { FindCepService } from '../../shared-services/find-cep.service';

@Component({
	selector: 'app-address-entry',
	templateUrl: './address-entry.component.html'	
})
export class AddressEntryComponent implements OnInit {

	constructor(private formBuilder: FormBuilder, private findCep: FindCepService) { }
		
	addressForm: FormGroup	
	isSearching: boolean = false

	address: Address
	
	ngOnInit(): void {
		this.addressForm = this.formBuilder.group({
			cep: [''],
			street: [''],
			city: [''],
			state: ['', Validators.maxLength(2)],
			neighborhood: [''],
			streetNumber: [''],
			complement: ['']
		})		
	}

	searchAddress(cep: string) {
		this.isSearching = true
		this.findCep.getAddressFromCep(cep.toString()).subscribe(addr => {
			this.address = {
				street: addr.logradouro,
				cep: addr.cep,
				city: addr.localidade,
				state: addr.uf,
				neighborhood: addr.bairro,
				complement: this.addressForm.get('complement').value,
				streetNumber: this.addressForm.get('streetNumber').value,
			}			
			this.isSearching = false
		})
	}

	getAddress(): Address {
		let formAddr = this.addressForm.getRawValue() as Address
		if (this.address == null) {
			return formAddr
		} else {
			this.address.streetNumber = formAddr.streetNumber
			this.address.complement = formAddr.complement
			return this.address
		}
	}

}
