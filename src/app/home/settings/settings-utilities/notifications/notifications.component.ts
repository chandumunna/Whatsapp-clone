import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';

@Component({
	selector: 'app-notifications',
	templateUrl: './notifications.component.html',
	styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
	constructor(
		private modalCtrl: ModalController,
		private actShtCtrl: ActionSheetController
	) {}

	ngOnInit() {}

	onClick() {
		this.modalCtrl.dismiss(null, null, 'notifications');
	}

	onReset() {
		this.actShtCtrl
			.create({
				header:
					'Reset all notification settings, including custom notifications for all your chats',
				buttons: [
					{
						text: 'Reset',
						role: 'destructive',
						handler: () => {
							console.log('reset pressed');
						}
					},
					{
						text: 'Cancel',
						role: 'cancel',
						handler: () => {
							console.log('cancel pressed');
						}
					}
				]
			})
			.then(actShtEl => {
				actShtEl.present();
			});
	}
}
