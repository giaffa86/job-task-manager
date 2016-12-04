import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent {
  title = 'Job Task Manager';

  constructor(private af: AngularFire) {

  }

}



// WEBPACK FOOTER //
// /home/fgiaffaglione/angular2/demo/~/angular2-template-loader!/home/fgiaffaglione/angular2/demo/src/app/app.component.ts


// WEBPACK FOOTER //
// /home/fgiaffaglione/angular2/demo/~/angular2-template-loader!/home/fgiaffaglione/angular2/demo/src/app/app.component.ts
