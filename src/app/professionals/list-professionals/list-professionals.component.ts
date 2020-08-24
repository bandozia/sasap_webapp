import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfessionalsService } from '../professionals.service';
import { PagedResult } from '../../shared/model/paged-result.model'
import { Professional } from '../model/professional.model';
import { Observable, Subject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
	selector: 'app-list-professionals',
	templateUrl: './list-professionals.component.html',
	styleUrls: ['./list-professionals.component.css'],
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
	],
})
export class ListProfessionalsComponent implements OnInit, OnDestroy {

	professionaslList$: Observable<PagedResult<Professional>>
	search: string
	debounce: Subject<string> = new Subject()

	displayedColumns: string[] = ['name'];
	expandedElement: Professional | null

	constructor(private professionalsService: ProfessionalsService) { }

	ngOnInit(): void {
		this.loadData()

		this.debounce.pipe(debounceTime(400)).subscribe(filter => {
			this.search = filter
			this.loadData()
		})
	}

	ngOnDestroy(): void {
		this.debounce.unsubscribe()
	}

	loadData(): void {
		if (this.search) {
			this.professionaslList$ = this.professionalsService.searchPaged(this.search)
		} else {
			this.professionaslList$ = this.professionalsService.getAllPaged(0, 10)
		}
	}

}
