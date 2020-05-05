import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-web',
	templateUrl: './web.component.html',
	styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {
	constructor(private modalCtrl: ModalController) {}

	ngOnInit() {}

	onClick() {
		this.modalCtrl.dismiss(null, null, 'desktop');
	}
}
