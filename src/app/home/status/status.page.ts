import { Component, OnInit } from '@angular/core';
import { Chat } from '../chats/chat.model';
import { ChatsService } from '../chats/chats.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
	selector: 'app-status',
	templateUrl: './status.page.html',
	styleUrls: ['./status.page.scss']
})
export class StatusPage implements OnInit {
	loadedPersons: Chat[];

	constructor(private chatService: ChatsService) {}

	ngOnInit() {
		this.loadedPersons = this.chatService.Chats;
	}
	onMute(slideCtrl: IonItemSliding) {
		console.log('Person muted!!!');
		// option.innertext('Unmute');
		slideCtrl.close();
	}
	onCamera() {
		console.log('Camera toggled!!');
	}
	onPen() {
		console.log('Status writter ovelay opened!');
	}
}
