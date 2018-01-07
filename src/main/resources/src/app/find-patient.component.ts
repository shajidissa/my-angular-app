import { Component, OnInit, Input } from '@angular/core';
import {AppService, Patient} from './app.service'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'find-patient',
  providers: [AppService],
  template: `
  
   <home-header></home-header> 
  
  <div class="container-fluid">
    <h1 class="col-sm-12">Find/Edit Patients</h1>
</div>


<div class="container">
	
		<div class="form-group row">
				<div class="col-xs-9">
				    <input class="form-control" type="text" id="search" [(ngModel)]="xxx" placeholder="Search">					
				</div>
		</div>
		<div class="form-group row">
				<div class="col-xs-9">
					<select class="form-control" id="searchtype" [(ngModel)]="searchtype" >
					    <option selected>Choose...</option>
					    <option value="1">Id</option>
					    <option value="2">Name</option>
					    <option value="3">NHS Id</option>
					</select>
				</div>
		</div>
		<div class="form-group row">
			<div class="offset-xs-3 col-xs-9">
				<button class="btn btn-primary" (click)="getPatient()">Search</button>
			</div>
		</div>
	
</div>
 
  <br>
  <div class="container">
  <label>{{ mymessage }}</label>
  </div>
   
 
  `
})

export class FindPatientComponent {

    
    constructor(private _service:AppService, private _http: Http) {}
    xxx: string;
    searchtype: string;
    mymessage: string = '';
    
    
	ngOnInit(): void {
	    //this.xxx = "kk"
        
	}
  
    // this.foosUrl+this.foo.id
    getPatient(){
    	this.mymessage = 'xxx = ' + this.xxx + ' searchtype = ' + this.searchtype;
    	
    	
    	if (this.searchtype == "undefined" || this.searchtype == "0")
    	{
    		this.mymessage = "Please select a value from dropdown";
    	}
        
    }
    
    
    
    
}
