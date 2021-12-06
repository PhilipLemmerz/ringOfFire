import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPlayerDialogComponent } from '../add-player-dialog/add-player-dialog.component';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {

  @Input() players: any;
  @Input() currentPlayer: any;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.currentPlayer);
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddPlayerDialogComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      if (this.players.length <= 9 && result?.length > 0) {
        this.players.push(result);
      } else if (this.players.length >= 9) {
        alert(' maximale Spieler Anzahl erreicht');
      }
    });
  }

}




