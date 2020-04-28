import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusDetailPage } from './status-detail.page';

const routes: Routes = [
  {
    path: '',
    component: StatusDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusDetailPageRoutingModule {}
