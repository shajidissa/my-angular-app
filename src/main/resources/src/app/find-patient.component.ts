import { Component, OnInit } from '@angular/core';
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
	<form (ngSubmit)="getPatient()">
		<div class="form-group row">
				<div class="col-xs-9">
				    <input class="form-control" type="text" id="validationServer01" placeholder="Search">					
				</div>
		</div>
		<div class="form-group row">
				<div class="col-xs-9">
					<select class="form-control" id="inlineFormCustomSelect" >
					    <option selected>Choose...</option>
					    <option value="1">Id</option>
					    <option value="2">Name</option>
					    <option value="3">NHS Id</option>
					</select>
				</div>
		</div>
		<div class="form-group row">
			<div class="offset-xs-3 col-xs-9">
				<button type="submit" class="btn btn-primary">Search</button>
			</div>
		</div>
	</form>
</div>
 
 
  `
})

export class FindPatientComponent {

    //patients: Patient[];   
    //observablePatients: Observable<Patient[]>
    
    public patient = new Patient(1,'sample foo','kk');
    private patientsUrl = 'http://51.141.9.85:5555/api/my-patient-microservice/demo/getpatient?id=1';
    
    constructor(private _service:AppService, private _http: Http) {}

	ngOnInit(): void {
	    
        //this.observableFoos = this.getAllPatientWithObservable()
        //this.observablePatients = this._service.getAllPatientWithObservable()
        
        //this.observablePatients.subscribe(
      	//	patients => this.patients = patients
      	//);
      
        
	}
  
    // this.foosUrl+this.foo.id
    getPatient(){
    	alert('d');
        this._service.getResource(this.patientsUrl)
         .subscribe(
                     data => this.patient = data,
                     error =>  this.patient.name = 'Error');
    }
    
    
    
    
}
