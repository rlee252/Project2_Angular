import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gameName: string;
  private gameId: number;
  setGameName(gameName: string) {
    this.gameName = gameName;
  }
  getGameName() {
    return this.gameName;
  }

  setGameId(gameId: number) {
    this.gameId = gameId;
  }
  getGameId() {
    return this.gameId;
  }
  constructor() { }
}
