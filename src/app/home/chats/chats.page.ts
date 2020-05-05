import { Component, OnInit } from '@angular/core';
import { ChatsService } from './chats.service';
import { Chat } from './chat.model';
import { IonItemSliding, ActionSheetController } from '@ionic/angular';

@Component({
	selector: 'app-chats',
	templateUrl: './chats.page.html',
	styleUrls: ['./chats.page.scss']
})
export class ChatsPage implements OnInit {
	loadedChats: Chat[];
	constructor(
		private chatService: ChatsService,
		private actionShtCtrl: ActionSheetController
	) {}

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
		this.actionShtCtrl
			.create({
				header: 'More',
				buttons: [
					{
						text: 'Mute',
						handler: () => {
							console.log('mute chat');
						}
					},
					{
						text: 'Group Info',
						handler: () => {
							console.log('chat info');
						}
					},
					{
						text: 'Export Chat',
						handler: () => {
							console.log('export chat');
						}
					},
					{
						text: 'Clear Chat',
						handler: () => {
							console.log('clear chat');
						}
					},
					{
						text: 'Delete Chat',
						role: 'destructive',
						handler: () => {
							console.log('delete chat');
						}
					},
					{
						text: 'Cancel',
						role: 'cancel'
					}
				]
			})
			.then(actionShtEl => {
				actionShtEl.present();
			})
			.catch(err => console.error(err))
			.finally(() => {
				slideCtrl.close();
			});
	}

	onClickEdit() {
		console.log('edit clicked');
	}
	onNewChat() {
		console.log('new chat clicked');
	}
}
