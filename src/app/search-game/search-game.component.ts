import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DummyGameTable } from 'src/model/dummyGameTable';
import { Game } from 'src/model/Game';
import { GameService } from '../game.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-search-game',
  templateUrl: './search-game.component.html',
  styleUrls: ['./search-game.component.css']
})
export class SearchGameComponent implements OnInit {
  game: Game[] = [{ gameName: "cooking mama", bigCoverUrl: "", coverWidth: 500, coverHeight: 500, thumbnailUrl: "https://cdn.discordapp.com/attachments/506514654764466197/844277974701572136/gameNotFoundThumb.jpg", gameID: 17 }];
  searchGameInput: string;
  isUserLoggedIn: boolean = false;
  loginService: LoginService;
  gameService: GameService;

  constructor(private router: Router, loginService: LoginService, gameService: GameService) {
    this.loginService = loginService;
    this.gameService = gameService;
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.isUserLoggedIn = this.loginService.getUserStatus();
    //console.log("inside ngOnChanges() " + this.isUserLoggedIn)
  }
  searchGame() {
    console.log("searchGameInput: " + this.searchGameInput);
  }
  onGetInfo(i: number) {

    // console.log(this.dummyGameTable[i].gameId);
    this.gameService.setGameName(this.game[i].gameName);
    console.log("game name: " + this.gameService.getGameName());
    this.gameService.setGameId(this.game[i].gameID)
    console.log("game id: " + this.gameService.getGameId());
    this.router.navigateByUrl(`/postGameReview`);
  }
  readReview(i: number) {
    //   console.log(this.dummyGameTable[i].gameId);
    this.gameService.setGameName(this.game[i].gameName);
    console.log("game name: " + this.gameService.getGameName());
    this.gameService.setGameId(this.game[i].gameID)
    console.log("game id: " + this.gameService.getGameId());
    this.router.navigateByUrl(`/readGameReview`);
  }
}
