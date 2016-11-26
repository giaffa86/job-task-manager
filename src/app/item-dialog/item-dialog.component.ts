import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.css']
})
export class ItemDialogComponent {
  firstname: string;

  constructor(public dialogRef: MdDialogRef<ItemDialogComponent>) { 
    this.firstname = '';
  }


}
