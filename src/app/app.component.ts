import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ItemDialogComponent } from './item-dialog/item-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dialogRef: MdDialogRef<ItemDialogComponent>;
  items: FirebaseListObservable<any[]>;
  selectedItem: any;

  constructor(private af: AngularFire, public dialog: MdDialog) {
    this.items = af.database.list('/items');
    console.log(this.items);
    this.selectedItem = 'prova';
  }

  click(item) {
    console.log(item);
    this.selectedItem = item;
  }

  add() {
    console.log('add new item');
    const newItem = {item: { name: 'Test'}};
    // this.items.push(newItem);
  }

  openDialog() {
    this.dialogRef = this.dialog.open(ItemDialogComponent, {
      disableClose: false,
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result: ' + result);
      this.dialogRef = null;
      if(result) {
        const newItem = {item: { name: result}};
        console.log(newItem);
        this.items.push(newItem)
      }
    });
  }

}
