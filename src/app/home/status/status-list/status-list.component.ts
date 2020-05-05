import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-status-list',
	templateUrl: './status-list.component.html',
	styleUrls: ['./status-list.component.scss']
})
export class StatusListComponent implements OnInit {
	constructor(private modalCtrl: ModalController) {}

	ngOnInit() {}

	onClick() {
		this.modalCtrl.dismiss();
	}
}
