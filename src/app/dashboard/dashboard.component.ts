import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ItemDialogComponent } from '../item-dialog/item-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: require('./dashboard.component.html'),
  styles: [require('./dashboard.component.css')]
})
export class DashboardComponent {
  dialogRef: MdDialogRef<ItemDialogComponent>;
  items: FirebaseListObservable<any[]>;
  selectedItem: any;

  constructor(private af: AngularFire, public router: Router, public dialog: MdDialog) {
    this.af.auth.subscribe(auth => {
      if (auth != null && auth.uid) {
        // If logged in, they redirect them to the home page
        this.items = af.database.list('/items');
      } else {
        this.router.navigate(['/login']);
      }
    });
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

  logout() {
    this.af.auth.logout();
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
        if (result.deleteKey) {
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
