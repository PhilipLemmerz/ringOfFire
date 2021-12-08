
import { Component, OnInit } from '@angular/core';
import { Game } from 'src/modules/gameData';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {


  constructor(private route: ActivatedRoute, private firestore: AngularFirestore) { }

  cardTurned = false;

  card = 'card-background.png';
  game = new Game();
  noCards = false;
  playHash = '';



  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.playHash = params['id'];
    });

    this.firestore.collection('games').doc(this.playHash).valueChanges().subscribe((gameDatabase: any) => {
      this.game.players = gameDatabase.players;
      this.game.stack = gameDatabase.stack;
      this.game.currentPlayer = gameDatabase.currentPlayer;
      this.game.playedCards = gameDatabase.playedCards;
      this.game.counter = gameDatabase.counter;
      this.game.cardTurned = gameDatabase.cardTurned;
      this.game.gameEnd = gameDatabase.gameEnd;
    });

  }

  turnCard() {
    if (this.game.cardTurned == false && this.game.players.length > 0) {
      this.game.cardTurned = true;
      let card: any = this.game.stack.pop();
      this.game.counter++;
      this.updatePlay();

      setTimeout(() => {
        this.game.playedCards.push(card);
        this.card = card + '.jpg';
        this.updatePlay();
        this.game.cardTurned = false;
        this.card = 'card-background.png';
        this.nextPlayer();
        if (this.game.stack.length == 0) {
          this.game.gameEnd = true;
        }
        this.nextPlayer();
      }, 2000);
    }

    if (this.game.players.length == 0) {
      alert('bitte erst einen Spieler hinzufügen');
    }

  }

  updatePlay() {
    this.firestore.collection('games').doc(this.playHash).update(this.game.convertToJSON());
  }

  nextPlayer() {
    let playerNumber = this.game.counter % this.game.players.length;
    this.game.currentPlayer = playerNumber;
    this.updatePlay();
  }
}


