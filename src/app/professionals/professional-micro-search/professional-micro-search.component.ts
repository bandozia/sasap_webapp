import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Professional } from '../model/professional.model';
import { ProfessionalsService } from '../professionals.service';

@Component({
	selector: 'app-professional-micro-search',
	templateUrl: './professional-micro-search.component.html',
	styleUrls: ['./professional-micro-search.component.css']
})
export class ProfessionalMicroSearchComponent implements OnInit {

	professionalsList$: Observable<Professional[]>
	search: string
	debounce: Subject<string> = new Subject()

	@Output() selectedProfessional: EventEmitter<Professional> = new EventEmitter()

	constructor(private professionalsService: ProfessionalsService) { }

	ngOnInit(): void {
		this.debounce.pipe(debounceTime(400)).subscribe(filter => {			
			this.search = filter
			this.loadData()
		})
	}

	loadData(): void {
		if (this.search) {
			this.professionalsList$ = this.professionalsService.professionalMicroSearch(this.search)
		}
	}

	teste(selected: Professional){
		this.selectedProfessional.emit(selected)
	}
}
