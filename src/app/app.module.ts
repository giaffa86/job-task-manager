import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { AuthGuardService } from './auth-guard.service';
import { MaterialModule } from '@angular/material';
import { ItemDialogComponent } from './item-dialog/item-dialog.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyC3AxwhbXoj8G14Ez-Kz5XKzbrm8VA1PiQ',
  authDomain: 'costmansud.firebaseapp.com',
  databaseURL: 'https://costmansud.firebaseio.com',
  storageBucket: 'costmansud.appspot.com',
  messagingSenderId: '727927067070'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent, canActivate : [AuthGuardService] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemDialogComponent,
    LoginComponent
  ],
  entryComponents: [
    ItemDialogComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [ RouterModule ],
  providers: [ AuthGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
