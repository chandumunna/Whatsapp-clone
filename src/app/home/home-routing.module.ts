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
					},
					{
						path: ':statusId',
						loadChildren: () =>
							import('./status/status-detail/status-detail.module').then(
								m => m.StatusDetailPageModule
							)
					}
				]
			},
			{
				path: 'camera',
				loadChildren: () =>
					import('./camera/camera.module').then(m => m.CameraPageModule)
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
					},
					{
						path: ':chatId',
						loadChildren: () =>
							import('./chats/chat-detail/chat-detail.module').then(
								m => m.ChatDetailPageModule
							)
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
