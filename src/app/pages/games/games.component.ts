import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { GameMockClient, Game } from "../../shared";

const NAME_KEBAB = "app-games";

@Component({
	templateUrl: "./games.component.html",
	styleUrls: ["./games.scss"],
	host: { class: NAME_KEBAB },
	// changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesComponent {

	public gamesData: any = [];
	public crumb: any = 'All Games';

	constructor(
		private _gamesService: GameMockClient,
		private _router: Router
	) {
	}

	ngOnInit(): void {
		this.getGames()
	}

	getGames() {
		this._gamesService.getAll$()
		.subscribe(res => {
			this.gamesData = res
			console.log('lada',this.gamesData)

		});
	}

	goToGame() {
		this._router.navigateByUrl('/game');
	}
}
