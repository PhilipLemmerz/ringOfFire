import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-player-dialog',
  templateUrl: './add-player-dialog.component.html',
  styleUrls: ['./add-player-dialog.component.scss']
})
export class AddPlayerDialogComponent   {

  name: any;

  constructor(public dialogRef: MatDialogRef <AddPlayerDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  
  }

  

  

}
