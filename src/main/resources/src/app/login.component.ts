import { Component } from '@angular/core';
import {AppService} from './app.service'

@Component({
  selector: 'login-form',
  providers: [AppService],  
  template: `
    <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="/">Spring Security Oauth - Password Flow</a>
    </div>
  </div>
</nav>

    <div class="col-sm-6">
        <h1>Login</h1>
        <div class="col-sm-12 form-group">
             <label>Username</label>
             <input class="form-control" type="text" [(ngModel)]="loginData.username" />
        </div>
        <div class="col-sm-12 form-group">
            <label>Password</label>
            <input class="form-control" type="password"  [(ngModel)]="loginData.password"/>
        </div>
        <div class="col-sm-12">
            <button class="btn btn-primary pull-right" (click)="login()" type="submit">Login</button>
        </div>
    </div>`
})
export class LoginComponent {
    public loginData = {username: "", password: ""};

    constructor(private _service:AppService) {}
 
    login() {
        this._service.obtainAccessToken(this.loginData);
    }
}
