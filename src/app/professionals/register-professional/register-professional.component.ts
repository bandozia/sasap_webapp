import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { Profession } from '../model/profession.model'
import { Professional } from '../model/professional.model'
import { FindCepService } from '../../shared/shared-services/find-cep.service'
import { ProfessionalsService } from '../professionals.service'
import { Address } from 'src/app/shared/model/address.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register-professional',
	templateUrl: './register-professional.component.html',
	styleUrls: ['./register-professional.component.css'],
	providers: [
		{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
		{ provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
	]
})
export class RegisterProfessionalComponent implements OnInit {

	professions: Profession[] = [
		{ name: 'medico', label: "Medico(a)", requireSensitiveData: true },
		{ name: 'psicologo', label: "Psicologo(a)", requireSensitiveData: false },
		{ name: 'empresario', label: "Empresario(a)", requireSensitiveData: false },
		{ name: 'professor', label: "Professor(a)", requireSensitiveData: false },
		{ name: 'outra', label: "Outra", requireSensitiveData: false }
	]

	selectedProfession: Profession = null
	dependOn: Professional = null

	formGroup: FormGroup
	
	address: Address = null
	isSearching: boolean = false
	isWorking: boolean = false

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private findCep: FindCepService,
		private professionalService: ProfessionalsService) { }

	ngOnInit(): void {
		this.formGroup = this.formBuilder.group({			
			profession: ['', Validators.required],
			crm: [''],
			crp: [''],
			name: ['', Validators.required],
			email: ['', Validators.email],
			birth: [''],
			phone: [''],
			address: this.formBuilder.group({
				cep: [''],
				street: [''],
				city: [''],
				state: ['', Validators.maxLength(2)],
				neighborhood: [''],
				streetNumber: [''],
				complement: ['']
			}),
			rg: [''],
			cpf: [''],
			cnpj: [''],
			bank: [''],
			agency: [''],
			account: [''],
			comments: ['']
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
				complement: this.formGroup.get('address').get('complement').value,
				streetNumber: this.formGroup.get('address').get('streetNumber').value,
			}			
			this.isSearching = false
		})
	}
	
	submit(): void {
		
		const professional: Professional = this.formGroup.getRawValue() as Professional		
		
		professional.dependsOn = this.dependOn

		if (this.address != null) {
			this.address.complement = this.formGroup.get('address').get('complement').value
			this.address.streetNumber = this.formGroup.get('address').get('streetNumber').value
			professional.address = this.address		
		}
		
		this.professionalService.register(professional).subscribe(res => {
			this.router.navigate(['profissionais'])
		}, err => {			
			if (err.status == 403) {
				alert('precisa relogar')
			}
			console.log(err)
		})
	}



}
