import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";

import { GameMockClient, Game } from "../../shared";

const NAME_KEBAB = "app-games";

@Component({
	templateUrl: "./game.component.html",
	styleUrls: ["./game.scss"],
	host: { class: NAME_KEBAB },
	// changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent {

	public gamesData: any = [];
	public crumb: any = 'All Games';

	constructor(
		private _gamesService: GameMockClient
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
}
