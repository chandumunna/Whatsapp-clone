import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';
import { CallsService } from './calls.service';
import { Call } from './call.model';
import { IonItemSliding } from '@ionic/angular';

@Component({
	selector: 'app-calls',
	templateUrl: './calls.page.html',
	styleUrls: ['./calls.page.scss']
})
export class CallsPage implements OnInit {
	loadedCallLog: Call[];
	constructor(private callsService: CallsService) {}

	ngOnInit() {
		this.loadedCallLog = this.callsService.callLog;
	}

	onSearchChange(event) {
		console.log('searching');
	}
	// forVideoCall() {
	// 	console.log('video call started');
	// }
	// forVoiceCall() {
	// 	console.log('voice call started');
	// }
	forCallerInfo() {
		console.log('info clicked');
	}
	onDelete(slideEl: IonItemSliding) {
		slideEl.close();
		console.log('call deleted!!!');
	}
	segmentChanged(event: CustomEvent<SegmentChangeEventDetail>) {
		console.log(event.detail);
	}
	onClickEdit() {
		console.log('edit clicked');
	}
	onNewCall() {
		console.log('new call clicked');
	}
}
