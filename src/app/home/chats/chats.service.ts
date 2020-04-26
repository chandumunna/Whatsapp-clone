import { Injectable } from '@angular/core';
import { Chat } from './chat.model';

@Injectable({
	providedIn: 'root'
})
export class ChatsService {
	private _chats: Chat[] = [
		new Chat('c1', '../assets/images/no-img.png', "What's up", 'Versh'),
		new Chat(
			'c2',
			'../assets/images/no-img.png',
			'Guy wetin dey happen',
			'Bad Guy'
		),
		new Chat(
			'c3',
			'../assets/images/no-img.png',
			'Guy wetin dey happen',
			'Correct Guy'
		),
		new Chat(
			'c4',
			'../assets/images/no-img.png',
			'Guy wetin dey happen',
			'Mumu Guy'
		),
		new Chat(
			'c5',
			'../assets/images/no-img.png',
			'Guy wetin dey happen',
			'Funny Guy'
		)
	];

	constructor() {}

	get Chats() {
		return [...this._chats];
	}
	getChat(id: string) {
		return { ...this._chats.find(c => c.id === id) };
	}
}
