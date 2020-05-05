import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-camera',
	templateUrl: './camera.component.html',
	styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
	constructor(private modCtrl: ModalController) {}

	ngOnInit() {}

	onClick() {
		this.modCtrl.dismiss();
	}
}
