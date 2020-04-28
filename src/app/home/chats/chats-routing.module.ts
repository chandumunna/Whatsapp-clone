import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatsPage } from './chats.page';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: ChatsPage
			},
			{
				path: ':/chatId',
				loadChildren: () =>
					import('./chat-detail/chat-detail.module').then(
						m => m.ChatDetailPageModule
					)
			}
		]
	},
	{
		path: 'chat-detail',
		loadChildren: () =>
			import('./chat-detail/chat-detail.module').then(
				m => m.ChatDetailPageModule
			)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ChatsPageRoutingModule {}
