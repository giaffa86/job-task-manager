import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ItemDialogComponent } from './item-dialog/item-dialog.component';

@Component({
  selector: 'app-root',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent {
  dialogRef: MdDialogRef<ItemDialogComponent>;
  items: FirebaseListObservable<any[]>;
  selectedItem: any;

  constructor(private af: AngularFire, public dialog: MdDialog) {
    this.items = af.database.list('/items');
    console.log(this.items);
    this.selectedItem = { name: 'Prova' };
  }

  selectItem(item) {
    console.log(item);
    this.selectedItem = item;
    this.openDialog();
  }

  add() {
    console.log('add new item');
    // const newItem = {item: { name: 'Test'}};
    // this.items.push(newItem);
  }

  openDialog() {
    this.dialogRef = this.dialog.open(ItemDialogComponent, {
      disableClose: false,
    });

    this.dialogRef.componentInstance.newItem = this.selectedItem;

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result: ' + result);
      this.dialogRef = null;
      if (result) {
        if (result.delete) {
          if (result.item && result.item.$key) {
            this.items.remove(result.item.$key);
          }
        } else {
          const key = result.$key;
          if (key) {
            delete result['$key'];
            delete result['$exists'];
            this.items.update(key, result);
          } else {
            console.log(result);
            this.items.push(result);
          }
        }
      }
    });
  }

}



// WEBPACK FOOTER //
// /home/fgiaffaglione/angular2/demo/~/angular2-template-loader!/home/fgiaffaglione/angular2/demo/src/app/app.component.ts


// WEBPACK FOOTER //
// /home/fgiaffaglione/angular2/demo/~/angular2-template-loader!/home/fgiaffaglione/angular2/demo/src/app/app.component.ts
