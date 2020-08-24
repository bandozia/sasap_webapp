import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'toAge'
})
export class DateToAgePipe implements PipeTransform {

	transform(birth: Date): string {
		let diff = new Date().getTime() - birth.getTime()
		let ages = diff / (1000 * 3600 * 365 * 24)
		console.log(ages)
		if (ages > 1) {
			return Math.floor(ages).toString() + ` ano${ages >= 2 ? 's' : ''}`
		} else {
			let months = diff / (1000 * 3600 * 365)
			return Math.floor(months).toString() + ` mes${months >= 2 ? 'es' : ''}`
		}

		
	}

}
