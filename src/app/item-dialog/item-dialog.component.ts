import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.css']
})
export class ItemDialogComponent implements OnInit {
  newItem: any;

  constructor(public dialogRef: MdDialogRef<ItemDialogComponent>) {
  }

  ngOnInit() {
  }


}
