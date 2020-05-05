import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusPageRoutingModule } from './status-routing.module';

import { StatusPage } from './status.page';
import { StatusListComponent } from './status-list/status-list.component';
import { StatusDetailComponent } from './status-detail/status-detail.component';
import { CameraComponent } from './camera/camera.component';
import { PenComponent } from './pen/pen.component';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, StatusPageRoutingModule],
	declarations: [
		StatusPage,
		StatusDetailComponent,
		StatusListComponent,
		CameraComponent,
		PenComponent
	],
	entryComponents: [
		StatusDetailComponent,
		StatusListComponent,
		CameraComponent,
		PenComponent
	]
})
export class StatusPageModule {}
