import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Professional } from '../../professionals/model/professional.model';
import { Address } from 'src/app/shared/model/address.model';
import { Client, ClientData, ClientSensitiveData } from './model/client.model'
import { AddressEntryComponent } from 'src/app/shared/shared-components/address-entry/address-entry.component';

@Component({
	selector: 'app-register-client',
	templateUrl: './register-client.component.html',
	styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

	constructor(private formBuilder: FormBuilder) { }
	
	professional: Professional = null
	hasPayer: boolean = false

	mainFormGroup: FormGroup	
	dataFormGroup: FormGroup
	
	age: number
	birth: Date

	@ViewChild(AddressEntryComponent) addressEntryComp: AddressEntryComponent

	ngOnInit(): void {
		this.mainFormGroup = this.formBuilder.group({
			name: ['', Validators.required],
			birth: ['', Validators.required]
		})

		this.dataFormGroup = this.formBuilder.group({
			rg: [null],
			cpf: [null]
		})
	}

	birthChanged(date: Date) {		
		let diff = new Date().getTime() - date.getTime()
		this.age = diff / (1000 * 3600 * 365 * 24)		

		this.birth = date
	}

	saveClient(): void {
				
		console.log(this.addressEntryComp.getAddress())
	}

}
