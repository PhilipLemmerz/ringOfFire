import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/modules/gameData';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private router: Router) { }

  ngOnInit(): void {
  }

  game() {
    
    this.firestore.collection('games').add(new Game().convertToJSON()).then((newGameInfo: any)=> {
      let gameId = newGameInfo['_delegate']['_key']['path']['segments'][1];
      this.router.navigateByUrl('/game/' + gameId);
         
    });
   
    

  }

}
