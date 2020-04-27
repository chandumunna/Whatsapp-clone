import { Component, OnInit } from '@angular/core';
import { ChatsService } from './chats.service';
import { Chat } from './chat.model';
import { IonItemSliding } from '@ionic/angular';

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
	onRead(slideCtrl: IonItemSliding) {
		slideCtrl.close();
		console.log('message read');
	}
	onPin(slideCtrl: IonItemSliding) {
		slideCtrl.close();
		console.log('message pinned');
	}
	onArchive(slideCtrl: IonItemSliding) {
		slideCtrl.close();
		console.log('message archived');
	}
	onMore(slideCtrl: IonItemSliding) {
		slideCtrl.close();
	}
}
