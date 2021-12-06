
import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/modules/gameData';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor() { }

  cardTurned = false;
  currentCard = false;
  card = 'card-background.png';
  game = new Game();
  stack = this.game.stack;
  noCards = false;
  players = this.game.players;
  currentCardPath: any;
  counter = 0;

  ngOnInit(): void {

  }

  turnCard() {
    if (this.cardTurned == false && this.stack.length >0 && this.game.players.length >0 ) {
      this.cardTurned = true;
      let card: any = this.game.stack.pop();
      this.game.playedCards.push(card);
      this.card = card + '.jpg';
      this.counter++;    
      

      setTimeout(() => {
        this.currentCardPath = card + '.jpg';
        this.cardTurned = false;
        this.card = 'card-background.png';
        this.currentCard = true;
        this.nextPlayer();
      }, 2000);
    }
    
    if(this.game.players.length ==0) {
      alert('bitte erst einen Spieler hinzufügen');
    }
    
  }
  
  

  nextPlayer(){
    let number = this.counter % this.players.length;
    this.game.currentPlayer = number;    
  }

}


