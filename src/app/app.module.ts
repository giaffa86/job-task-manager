import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';
import { ItemDialogComponent } from './item-dialog/item-dialog.component';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyC3AxwhbXoj8G14Ez-Kz5XKzbrm8VA1PiQ",
    authDomain: "costmansud.firebaseapp.com",
    databaseURL: "https://costmansud.firebaseio.com",
    storageBucket: "costmansud.appspot.com",
    messagingSenderId: "727927067070"
  };

@NgModule({
  declarations: [
    AppComponent,
    ItemDialogComponent
  ],
  entryComponents:[
    ItemDialogComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
