import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
	constructor(private modalCtrl: ModalController) {}

	ngOnInit() {}

	onClick() {
		this.modalCtrl.dismiss(null, null, 'account');
	}
}
