import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPlayerDialogComponent } from '../add-player-dialog/add-player-dialog.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {

  @Input() game: any;
  @Input() playHash: any;
 


  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
   
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPlayerDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      if (this.game.players.length <= 9 && result?.length > 0) {
        this.game.players.push(result);
      } else if (this.game.players.length >= 9) {
        alert(' maximale Spieler Anzahl erreicht');
      }
      this.firestore.collection('games').doc(this.playHash).update(this.game.convertToJSON());
    });

    
    
  }

}




