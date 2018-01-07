import { Component } from '@angular/core';
import {AppService} from './app.service'

@Component({
  selector: 'login-form',
  providers: [AppService], 
  styleUrls: ['../assets/css/login.css'], 
  template: `
  
<body class="my-login-page">  
<section class="h-100">
		<div class="container h-100">
			<div class="row justify-content-md-center h-100">
				<div class="card-wrapper">
					<div class="brand">
						<img src="../assets/images/ang.png">
					</div>
					<div class="card fat">
						<div class="card-body">
							<h4 class="card-title">Login</h4>
							
							 
								<div class="form-group">
									<label>Username</label>
									<input class="form-control" type="text" [(ngModel)]="loginData.username" />
								</div>

								<div class="form-group">								
									<label for="password">Password
										<!--
										<a href="forgot.html" class="float-right">
											Forgot Password?
										</a>
										-->
									</label>
									<input class="form-control" type="password"  [(ngModel)]="loginData.password"/>
								</div>

								<!--
								<div class="form-group">
									<label>
										<input type="checkbox" name="remember"> Remember Me
									</label>
								</div
								-->

								<div class="form-group no-margin">
									<button class="btn btn-primary pull-right" (click)="login()" type="submit">Login</button>
								</div>
								
							
						</div>
					</div>
					<div class="footer">
						Copyright &copy; 2018 &mdash; Saj Issa 
					</div>
				</div>
			</div>
		</div>
	</section>
	</body>
	
    `
})
export class LoginComponent {
    public loginData = {username: "admin", password: "admin"};

    constructor(private _service:AppService) {}
 
    login() {
        this._service.obtainAccessToken(this.loginData);
    }
}
