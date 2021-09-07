import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { GameMockClient, Game } from "../../shared";

const NAME_KEBAB = "app-home";

@Component({
	templateUrl: "./home.component.html",
	styleUrls: ["./home.scss"],
	host: { class: NAME_KEBAB },
	// changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit{


	public gamesData: any = [];
	public crumb: any = 'Trending Games';
	

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
			this.gamesData = res.filter(d => d.tag == 'trending')
			console.log('luda',this.gamesData)

		});
	}
}
