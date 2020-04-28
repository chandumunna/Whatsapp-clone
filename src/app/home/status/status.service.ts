import { Injectable } from '@angular/core';
import { Status } from './status.model';

@Injectable({
	providedIn: 'root'
})
export class StatusService {
	private _loadedStatuses: Status[] = [
		new Status(
			's1',
			'../assets/images/no-img.png',
			'posted moments ago',
			'Versh'
		),
		new Status(
			's2',
			'../assets/images/no-img.png',
			'posted moments ago',
			'Ter'
		),
		new Status(
			's3',
			'../assets/images/no-img.png',
			'posted moments ago',
			'Funny Guy'
		),
		new Status(
			's4',
			'../assets/images/no-img.png',
			'posted moments ago',
			'Bad Guy'
		),
		new Status(
			's5',
			'../assets/images/no-img.png',
			'posted moments ago',
			'Good Guy'
		)
	];

	constructor() {}

	get Statuses() {
		return [...this._loadedStatuses];
	}
	getAStatus(statusId: string) {
		return { ...this._loadedStatuses.find(m => m.statusId === statusId) };
	}
}
