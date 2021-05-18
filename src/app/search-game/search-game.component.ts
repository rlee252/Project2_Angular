import { Component, OnInit } from '@angular/core';
import { DummyGameTable } from 'src/model/dummyGameTable';

@Component({
  selector: 'app-search-game',
  templateUrl: './search-game.component.html',
  styleUrls: ['./search-game.component.css']
})
export class SearchGameComponent implements OnInit {
  dummyGameTable: DummyGameTable[] = [{ gameId: 123, rating: 5 }, { gameId: 1111, rating: 8 }, { gameId: 5000, rating: 1 }];
  constructor() { }

  ngOnInit(): void {
  }

  onGetInfo() {
    console.log("get info")
    console.log(this.dummyGameTable);
  }

}
