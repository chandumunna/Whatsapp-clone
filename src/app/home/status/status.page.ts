import { Component, OnInit } from '@angular/core';
import { IonItemSliding, ModalController } from '@ionic/angular';
import { StatusService } from './status.service';
import { Status } from './status.model';
import { StatusListComponent } from './status-list/status-list.component';

@Component({
	selector: 'app-status',
	templateUrl: './status.page.html',
	styleUrls: ['./status.page.scss']
})
export class StatusPage implements OnInit {
	loadedStatuses: Status[];

	constructor(
		private statusService: StatusService,
		private modalCtrl: ModalController
	) {}

	ngOnInit() {
		this.loadedStatuses = this.statusService.Statuses;
	}
	onMute(slideCtrl: IonItemSliding) {
		console.log('Person muted!!!');
		// option.innertext('Unmute');
		slideCtrl.close();
	}
	onCamera() {
		console.log('Camera toggled!!');
	}
	onPen() {
		console.log('Status writter ovelay opened!');
	}
	onSelfStatus() {
		console.log('This is the self status');
		// this.modalCtrl
		// 	.create({
		// 		component: StatusListComponent
		// 	})
		// 	.then(modEl => {
		// 		modEl.present();
		// 	})
		// 	.catch(err => console.error(err));
	}
}
