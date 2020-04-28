import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusDetailPageRoutingModule } from './status-detail-routing.module';

import { StatusDetailPage } from './status-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusDetailPageRoutingModule
  ],
  declarations: [StatusDetailPage]
})
export class StatusDetailPageModule {}
