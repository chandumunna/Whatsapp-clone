import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-pen',
	templateUrl: './pen.component.html',
	styleUrls: ['./pen.component.scss']
})
export class PenComponent implements OnInit {
	constructor(private modCtrl: ModalController) {}

	ngOnInit() {}

	onClick() {
		this.modCtrl.dismiss();
	}
}
