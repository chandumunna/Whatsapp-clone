import { Component, OnInit } from '@angular/core';
import { IonItemSliding, ModalController } from '@ionic/angular';
import { StatusService } from './status.service';
import { Status } from './status.model';
import { StatusListComponent } from './status-list/status-list.component';
import { StatusDetailComponent } from './status-detail/status-detail.component';
import { CameraComponent } from './camera/camera.component';
import { PenComponent } from './pen/pen.component';

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
		// console.log('Camera toggled!!');
		this.modalCtrl
			.create({
				component: CameraComponent
			})
			.then(el => {
				el.present();
			});
	}
	onPen() {
		// console.log('Status writter ovelay opened!');
		this.modalCtrl
			.create({
				component: PenComponent
			})
			.then(mdEl => {
				mdEl.present();
			});
	}
	onSelfStatus() {
		// console.log('This is the self status');
		this.modalCtrl
			.create({
				component: StatusListComponent
			})
			.then(modEl => {
				modEl.present();
			})
			.catch(err => console.error(err));
	}

	onClick(personId) {
		this.modalCtrl
			.create({
				component: StatusDetailComponent,
				id: personId
			})
			.then(modEl => {
				modEl.present();
			});
	}
}
