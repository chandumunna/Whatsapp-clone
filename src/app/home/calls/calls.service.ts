import { Injectable } from '@angular/core';
import { Call } from './call.model';

@Injectable({
	providedIn: 'root'
})
export class CallsService {
	private _callLog: Call[] = [
		new Call('../assets/images/no-img.png', 'yesterday', 'Ter', 'outgoing'),
		new Call('../assets/images/no-img.png', 'yesterday', 'Versh', 'outgoing'),
		new Call(
			'../assets/images/no-img.png',
			'2 days ago',
			'Bad Guy',
			'outgoing'
		),
		new Call('../assets/images/no-img.png', '2 days ago', 'Bitch', 'incoming'),
		new Call(
			'../assets/images/no-img.png',
			'1 week ago',
			'My love',
			'incoming'
		),
		new Call('../assets/images/no-img.png', 'yesterday', 'Ter', 'outgoing'),
		new Call('../assets/images/no-img.png', 'yesterday', 'Funny Guy', 'missed')
	];

	constructor() {}

	get callLog() {
		return [...this._callLog];
	}
}
