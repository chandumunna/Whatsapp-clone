import { Component, OnInit } from '@angular/core';
import { ChatsService } from './chats.service';
import { Chat } from './chat.model';

@Component({
	selector: 'app-chats',
	templateUrl: './chats.page.html',
	styleUrls: ['./chats.page.scss']
})
export class ChatsPage implements OnInit {
	loadedChats: Chat[];
	constructor(private chatService: ChatsService) {}

	ngOnInit() {
		this.loadedChats = this.chatService.Chats;
	}
	onSearchChange(event) {
		console.log('Searching');
	}
}
