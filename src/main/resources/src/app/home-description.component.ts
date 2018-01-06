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
    This is a simple Oauth2 Angular4, Spring Microservices example.
    <br>
    <br>
    The Spring discovery service Eurareka is : <a href="http://51.141.9.85:8761" target="_blank">http://51.141.9.85:8761</a>
    
  </div>

  `
})

export class HomeDescriptionComponent {

    
    constructor(private _service:AppService) {} 
    
}
