import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
	{
		path: 'tabs',
		component: HomePage,
		children: [
			{
				path: 'settings',
				children: [
					{
						path: '',
						loadChildren: () =>
							import('./settings/settings.module').then(
								m => m.SettingsPageModule
							)
					}
				]
			},
			{
				path: 'status',
				children: [
					{
						path: '',
						loadChildren: () =>
							import('./status/status.module').then(m => m.StatusPageModule)
					}
				]
			},
			{
				path: 'calls',
				children: [
					{
						path: '',
						loadChildren: () =>
							import('./calls/calls.module').then(m => m.CallsPageModule)
					}
				]
			},
			{
				path: 'chats',
				children: [
					{
						path: '',
						loadChildren: () =>
							import('./chats/chats.module').then(m => m.ChatsPageModule)
					}
				]
			},
			{
				path: '',
				redirectTo: '/home/tabs/chats',
				pathMatch: 'full'
			}
		]
	},
	{
		path: '',
		redirectTo: '/home/tabs/chats',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomePageRoutingModule {}
