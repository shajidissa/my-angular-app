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
				    <input class="form-control" type="text" id="search" [(ngModel)]="searchtext" placeholder="Search">					
				</div>
		</div>
		<div class="form-group row">
				<div class="col-xs-9">
					<select class="form-control" id="searchtype" [(ngModel)]="searchtype" >
					    <option value="0" selected>Choose...</option>
					    <option value="id">Id</option>
					    <option value="name">Name</option>
					    <option value="nhsid">NHS Id</option>
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
   
  <div *ngIf="patients?.length" class="container">
 <div class="row">
 <table class="table table-bordered">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>NHS ID</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let patient of patients">
      <th scope="row">{{patient.id}}</th>
      <td>{{patient.name}}</td>
      <td>{{patient.nhsid}}</td>
    </tr>
  </tbody>
</table>

 </div>
 </div>
  `
})

export class FindPatientComponent {

    
    constructor(private _service:AppService, private _http: Http) {}
    searchtext: string;
    searchtype: string;
    mymessage: string = '';
    observablePatients: Observable<Patient[]>;
    patients: Patient[]; 
    
    
    
	ngOnInit(): void {
	    //this.searchtext = "kk"
        
	}
  
    // this.foosUrl+this.foo.id
    getPatient(){
    	//this.mymessage = 'searchtext = ' + this.searchtext + ' searchtype = ' + this.searchtype;
    	
    	this.mymessage = '';
    	this.patients = [];
    	
    	if (this.searchtype == undefined || this.searchtype == "0")
    	{
    		this.mymessage = "Please select a value from dropdown";
    	}
    	
    	if (this.searchtext == undefined || this.searchtext == "")
    	{
    		this.mymessage = "Please enter some text to search";
    	}
    	
    	
    	if ( (this.searchtext != undefined && this.searchtext != "") &&
    		 (this.searchtype != undefined && this.searchtype != "0") )
    	{
    	
    		if (this.searchtype == "id")
    		{
    			this.observablePatients = this._service.getPatientWithObservableById(this.searchtext);
    		}
    		
    		if (this.searchtype == "name")
    		{
    			this.observablePatients = this._service.getPatientWithObservableByName(this.searchtext)      
    		}
    		
    		if (this.searchtype == "nhsid")
    		{
    			this.observablePatients = this._service.getPatientWithObservableByNhsid(this.searchtext)
    		}
    		
    		this.observablePatients.subscribe(
      			patients => this.patients = patients
      		);
    	
    	}
    	
        
    }
    
    
    
    
}
