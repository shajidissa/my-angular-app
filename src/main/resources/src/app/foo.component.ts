import { Component, OnInit } from '@angular/core';
import {AppService, Foo} from './app.service'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'foo-details',
  providers: [AppService],
  template: `
  
  <home-header></home-header>
  <div class="container">
    <h1 class="col-sm-12">Foo Details</h1>
    <div class="col-sm-12">
        <label class="col-sm-3">ID</label> <span>{{foo.id}}</span>
    </div>
    <div class="col-sm-12">
        <label class="col-sm-3">Name</label> <span>{{foo.name}}</span>
    </div>
    <div class="col-sm-12">
        <button class="btn btn-primary" (click)="getFoo()" type="submit">New Foo</button>        
    </div>
</div>

<ul>
<li *ngFor="let foo of foos">
    id: {{foo.id}}, name: {{foo.name}}, nhsid: {{foo.nhsid}}
  </li>
 </ul>
  `
})

export class FooComponent {

    foos: Foo[];   
    observableFoos: Observable<Foo[]>
    
    public foo = new Foo(1,'sample foo','kk');
    private foosUrl = 'http://51.141.9.85:5555/api/my-patient-microservice/demo/getpatient?id=1';
    
    constructor(private _service:AppService, private _http: Http) {}

	ngOnInit(): void {
	    
        //this.observableFoos = this.getAllPatientWithObservable()
        this.observableFoos = this._service.getAllPatientWithObservable()
        
        this.observableFoos.subscribe(
      		foos => this.foos = foos
      	);      
	}
  
    // this.foosUrl+this.foo.id
    getFoo(){
        this._service.getResource(this.foosUrl)
         .subscribe(
                     data => this.foo = data,
                     error =>  this.foo.name = 'Error');
    }
       
}
