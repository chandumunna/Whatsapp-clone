import { Component, OnInit } from '@angular/core';
import { Status } from '../status.model';
import { Router, ActivatedRoute } from '@angular/router';
import { StatusService } from '../status.service';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-status-detail',
	templateUrl: './status-detail.page.html',
	styleUrls: ['./status-detail.page.scss']
})
export class StatusDetailPage implements OnInit {
	status: Status;
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private navCtrl: NavController,
		private statusService: StatusService
	) {}

	ngOnInit() {
		this.route.paramMap.subscribe(paramMap => {
			if (!paramMap.has('statusId')) {
				this.navCtrl.navigateBack('/home/tabs/status');
			}
			this.status = this.statusService.getAStatus(paramMap.get('statusId'));
		});
	}
}
