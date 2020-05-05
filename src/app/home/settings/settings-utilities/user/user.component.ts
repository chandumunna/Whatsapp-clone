import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
	constructor(private modalCtrl: ModalController) {}

	ngOnInit() {}

	onClick() {
		this.modalCtrl.dismiss(null, null, 'user');
	}
}
