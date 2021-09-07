import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GamesComponent } from "./games/games.component";
import { HomeComponent } from "./home/home.component";

import { AppPagesRoutingModule } from "./pages-routing.module";
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { GameComponent } from "./game/game.component";

const COMPONENTS = [
	HomeComponent,
	GamesComponent,
	GameComponent
];

@NgModule({
	imports: [
		CommonModule,
		AppPagesRoutingModule,
		NzCardModule,
		NzBreadCrumbModule
	],
	declarations: [
		...COMPONENTS
	],
	exports: [
		...COMPONENTS
	]
})
export class AppPagesModule {

}
