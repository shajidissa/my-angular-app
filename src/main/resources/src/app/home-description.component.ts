import { Component, OnInit } from '@angular/core';
import {AppService} from './app.service'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home-description-details',
  providers: [AppService],
  template: ` 
  
  <home-header></home-header>
  <br>
  <div class="container">
    This is a simple Oauth2, Angular4, Docker, Jenkins, Spring Microservices example.
    <br>
    <br>
    You can click on Actions; View Patients (GET), Add a Patient (POST), Find/Edit/Delete a Patient (GET/PUT/DELETE)
    <br>
    <br>
    A description of the Rest api can be found in the Swagger link.
    <br>
    <br>
    The Spring discovery service Eurareka is : <a href="http://51.141.9.85:8761" target="_blank">http://51.141.9.85:8761</a>
    <br>
    <br>
    Jenkins pipe line : <a href="http://52.191.209.219/jenkins/" target="_blank">http://52.191.209.219/jenkins/</a>
    <br>
    <br>
    Github repos :
    <br>
    <a href="https://github.com/shajidissa/my-angular-app" target="_blank">my-angular-app</a>
    <br>
    <a href="https://github.com/shajidissa/my-patient-microservice" target="_blank">my-patient-microservice</a>
    <br>
    <a href="https://github.com/shajidissa/my-eureka-server" target="_blank">my-eureka-server</a>
    <br>
    <a href="https://github.com/shajidissa/my-zuul-server" target="_blank">my-zuul-server</a>
    <br>
    <a href="https://github.com/shajidissa/my-authenticating-service" target="_blank">my-authenticating-service</a>
    <br>
    <a href="https://github.com/shajidissa/my-configuration-server" target="_blank">my-configuration-server</a>
    <br>
    <a href="https://github.com/shajidissa/config-repo" target="_blank">config-repo</a>
    
  </div>

  `
})

export class HomeDescriptionComponent {

    
    constructor(private _service:AppService) {} 
    
}
