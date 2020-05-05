import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';
import { ActionSheetController } from '@ionic/angular';

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

	constructor(private actShtCtrl: ActionSheetController) {}

	ngOnInit() {}

	userDetails() {
		console.log('for additional user details');
	}
	help() {
		console.log('Help');
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
