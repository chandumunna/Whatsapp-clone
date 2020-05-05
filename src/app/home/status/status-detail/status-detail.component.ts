import { Component, OnInit } from '@angular/core';
import { Status } from '../status.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { StatusService } from '../status.service';

@Component({
	selector: 'app-status-detail',
	templateUrl: './status-detail.component.html',
	styleUrls: ['./status-detail.component.scss']
})
export class StatusDetailComponent implements OnInit {
	status: Status;
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private navCtrl: NavController,
		private modCtrl: ModalController,
		private statusService: StatusService
	) {}

	ngOnInit() {
		// this.route.paramMap.subscribe(paramMap => {
		// 	if (!paramMap.has('statusId')) {
		// 		this.navCtrl.navigateBack('/home/tabs/status');
		// 	}
		// 	this.status = this.statusService.getAStatus(paramMap.get('statusId'));
		// });
	}

	onClick() {
		this.modCtrl.dismiss();
	}
}
