import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { StarredComponent } from './settings-utilities/starred/starred.component';
import { WebComponent } from './settings-utilities/web/web.component';
import { AccountComponent } from './settings-utilities/account/account.component';
import { ChatsComponent } from './settings-utilities/chats/chats.component';
import { NotificationsComponent } from './settings-utilities/notifications/notifications.component';
import { DataComponent } from './settings-utilities/data/data.component';
import { HelpComponent } from './settings-utilities/help/help.component';
import { UserComponent } from './settings-utilities/user/user.component';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.page.html',
	styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
	user: Person = {
		userName: 'Hemense Lan',
		imageUrl: '../assets/images/no-img.png',
		bio: 'Available',
		contactNo: '07082855649',
		displayName: 'Hemen'
	};

	constructor(
		private actShtCtrl: ActionSheetController,
		private modalCtrl: ModalController
	) {}

	ngOnInit() {}

	// part 1
	userDetails() {
		// console.log('for additional user details');
		this.modalCtrl
			.create({
				component: UserComponent,
				id: 'user'
			})
			.then(modEl => {
				modEl.present();
			});
	}
	// part 2
	starredMessages() {
		// console.log('for starred messages');
		this.modalCtrl
			.create({
				component: StarredComponent,
				id: 'starred'
			})
			.then(modalEl => {
				modalEl.present();
			})
			.catch(err => console.log(err));
	}
	forDesktop() {
		// console.log('for whatsapp web');
		this.modalCtrl
			.create({
				component: WebComponent,
				id: 'desktop'
			})
			.then(modEl => {
				modEl.present();
			});
	}

	// part 3
	accountDetails() {
		// console.log('for user account details');
		this.modalCtrl
			.create({
				component: AccountComponent,
				id: 'account'
			})
			.then(modEl => {
				modEl.present();
			});
	}
	chatHistory() {
		// console.log('for chat history');
		this.modalCtrl
			.create({
				component: ChatsComponent,
				id: 'chatHistory'
			})
			.then(modEl => {
				modEl.present();
			});
	}
	forNotifications() {
		// console.log('for notifications');
		this.modalCtrl
			.create({
				component: NotificationsComponent,
				id: 'notifications'
			})
			.then(modEl => {
				modEl.present();
			});
	}
	dataUsage() {
		// console.log('for data and storage usage history');
		this.modalCtrl
			.create({
				component: DataComponent,
				id: 'data'
			})
			.then(modEl => {
				modEl.present();
			});
	}

	// part 4
	help() {
		// console.log('Help');
		this.modalCtrl
			.create({
				component: HelpComponent,
				id: 'help'
			})
			.then(modEl => {
				modEl.present();
			});
	}
	share() {
		this.actShtCtrl
			.create({
				buttons: [
					{
						text: 'Mail'
					},
					{
						text: 'Message'
					},
					{
						text: 'More'
					},
					{
						text: 'Cancel',
						role: 'cancel'
					}
				]
			})
			.then(actShtEl => {
				actShtEl.present();
			})
			.catch(err => console.log(err));
	}
}
