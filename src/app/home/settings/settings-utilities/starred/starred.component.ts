import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-starred',
	templateUrl: './starred.component.html',
	styleUrls: ['./starred.component.scss']
})
export class StarredComponent implements OnInit {
	constructor(private modalCtrl: ModalController) {}

	ngOnInit() {}

	onClick() {
		this.modalCtrl.dismiss(null, null, 'starred');
	}
}
