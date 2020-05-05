import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusPage } from './status.page';
import { StatusDetailComponent } from './status-detail/status-detail.component';

const routes: Routes = [
	{
		path: '',
		component: StatusPage
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StatusPageRoutingModule {}
