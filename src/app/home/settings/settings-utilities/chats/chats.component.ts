import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { ClearComponent } from './clear/clear.component';

@Component({
	selector: 'app-chats',
	templateUrl: './chats.component.html',
	styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent implements OnInit {
	constructor(
		private modalCtrl: ModalController,
		private actShtCtrl: ActionSheetController
	) {}

	ngOnInit() {}

	onClick() {
		this.modalCtrl.dismiss(null, null, 'chatHistory');
	}

	onArchive() {
		this.actShtCtrl
			.create({
				header: 'Archive all of your chats?',
				buttons: [
					{
						text: 'Archive',
						role: 'destructive',
					},
					{
						text: 'Cancel',
						role: 'cancel',
					},
				],
			})
			.then((actSht) => {
				actSht.present();
			});
	}
	onClear() {
		this.modalCtrl
			.create({
				component: ClearComponent,
				id: 'Clear Chats',
			})
			.then((el) => {
				el.present();
			});
	}

	onDelete() {
		this.actShtCtrl
			.create({
				header: 'Delete all of your chats?',
				buttons: [
					{
						text: 'Delete',
						role: 'destructive',
					},
					{
						text: 'Cancel',
						role: 'cancel',
					},
				],
			})
			.then((actSht) => {
				actSht.present();
			});
	}
}
