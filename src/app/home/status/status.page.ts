import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { StatusService } from './status.service';
import { Status } from './status.model';

@Component({
	selector: 'app-status',
	templateUrl: './status.page.html',
	styleUrls: ['./status.page.scss']
})
export class StatusPage implements OnInit {
	loadedStatuses: Status[];

	constructor(private statusService: StatusService) {}

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
}
