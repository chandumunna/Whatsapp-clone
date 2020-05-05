import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';

import { AccountComponent } from './settings-utilities/account/account.component';
import { ChatsComponent } from './settings-utilities/chats/chats.component';
import { DataComponent } from './settings-utilities/data/data.component';
import { HelpComponent } from './settings-utilities/help/help.component';
import { NotificationsComponent } from './settings-utilities/notifications/notifications.component';
import { StarredComponent } from './settings-utilities/starred/starred.component';
import { WebComponent } from './settings-utilities/web/web.component';
import { UserComponent } from './settings-utilities/user/user.component';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, SettingsPageRoutingModule],
	declarations: [
		SettingsPage,
		AccountComponent,
		ChatsComponent,
		DataComponent,
		HelpComponent,
		NotificationsComponent,
		StarredComponent,
		UserComponent,
		WebComponent
	],
	entryComponents: [
		AccountComponent,
		ChatsComponent,
		DataComponent,
		HelpComponent,
		NotificationsComponent,
		StarredComponent,
		UserComponent,
		WebComponent
	]
})
export class SettingsPageModule {}
