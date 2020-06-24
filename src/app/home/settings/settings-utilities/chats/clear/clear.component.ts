import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';

@Component({
	selector: 'app-clear',
	templateUrl: './clear.component.html',
	styleUrls: ['./clear.component.scss'],
})
export class ClearComponent implements OnInit {
	constructor(
		private modalCtrl: ModalController,
		private actShtCtrl: ActionSheetController
	) {}

	ngOnInit() {}

	close() {
		this.modalCtrl.dismiss();
	}

	clearChats() {
		this.actShtCtrl
			.create({
				header: 'Are you sure you want to clear chats',
				buttons: [
					{
						text: 'Clear',
						role: 'destructive',
					},
					{
						text: 'Cancel',
						role: 'cancel',
					},
				],
			})
			.then((el) => {
				el.present();
			});
	}
}
