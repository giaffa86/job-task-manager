import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  template: require('./login.component.html'),
  styles: [require('./login.component.css')]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public af: AngularFire, public router: Router) {
    this.af.auth.subscribe(auth => {
      if (auth != null && auth.uid) {
        // If logged in, they redirect them to the home page
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnInit() {
  }

  login(): void {
    this.af.auth.login({ email: this.email, password: this.password });
  }

  goHome(): void {
  this.router.navigate(['home']);
}

}



// WEBPACK FOOTER //
// /home/fgiaffaglione/angular2/demo/~/angular2-template-loader!/home/fgiaffaglione/angular2/demo/src/app/login/login.component.ts