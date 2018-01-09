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
    <h1 class="col-sm-12">Find/Edit/Delete Patients</h1>
</div>


<div class="container">
	
		<div class="form-group row">
				<div class="col-xs-9">
				    <input class="form-control" type="text" id="search" [(ngModel)]="searchtext" placeholder="Search">					
				</div>
		</div>
		<div class="form-group row">
				<div class="col-xs-9">
					<select style="width:223px;" class="form-control" id="searchtype" [(ngModel)]="searchtype" >
					    <option value="" selected>Choose...</option>
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
      <th>Save</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let patient of patients; let i = index">
      <th scope="row">{{patient.id}}</th>
      
      
      <td> 
      	<input name="name-{{patient.id}}" [(ngModel)]="patient.name">     
      	<div id="msg-name-{{patient.id}}" style="color:red; font-size: 11px;"></div>
      </td>
      
      <td> 
      	<input name="nhsid-{{patient.id}}" [(ngModel)]="patient.nhsid"> 
      	<div id="msg-nhsid-{{patient.id}}" style="color:red; font-size: 11px;"></div>
     </td>
      
     <!-- <td>{{patient.name}}</td> 
      <td>{{patient.nhsid}}</td> -->
      <td><button class="btn btn-primary" (click)="makePatientEditable(patient, i)">Save</button> <div id="msg-saved-{{patient.id}}" style="color:red; font-size: 11px;"></div> </td>
      <td><button class="btn btn-primary" (click)="makePatientEditable(patient)">Delete</button>  <div id="msg-deleted-{{patient.id}}" style="color:red; font-size: 11px;"></div> </td>
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
    p: Patient;
    
    
    
	ngOnInit(): void {
	    //this.searchtext = "kk"
	    this.searchtype ="name";
        
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
    		 (this.searchtype != undefined && this.searchtype != "") )
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
    
    
    makePatientEditable(p : Patient, i : number) {
    	//alert(i + ": " + p.id + " " + p.name + " " + p.nhsid  );
    	
    	document.getElementById('msg-name-'+p.id).innerHTML = "";
    	document.getElementById('msg-nhsid-'+p.id).innerHTML = "";
    	document.getElementById('msg-saved-'+p.id).innerHTML = "";
    	document.getElementById('msg-deleted-'+p.id).innerHTML = "";
    	this.updatePatientWithPromise2(p,i);
    	
    }
    
     updatePatientWithPromise2(patient:Patient, i : number) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
	  this._http.put("http://51.141.9.85:5555/api/my-patient-microservice/demo/updatepatient", patient, options)
	      .subscribe(
	        res => {
	          console.log("AAA" + res);
	          document.getElementById('msg-saved-'+patient.id).innerHTML = "Saved";
	          
	        },
	        err => {
	          console.log("Error occured1" + err);
	          const body = err.json() || '';   
    		  //const error3 = body.error || JSON.stringify(body);
    		  const error3 = JSON.stringify(body);
    		  
    		  const error4 = JSON.parse(error3)
	          
	          console.log("Error occured2 =" + error3 );
	          //console.log("Error occured3 = " + error4.errorCode );
	          console.log("Error occured4 =" + error4.status );
	          
	          var count = Object.keys(error4.errors).length;
	          
	          console.log("Error occured5 =" + count );
	          
	          this.mymessage = "";
	          
	          error4.errors.forEach(element => {
				    console.log(element.field);
				    console.log(element.defaultMessage);
				    
				    
				    
				    
				    if (element.field == 'name') { document.getElementById('msg-name-'+patient.id).innerHTML = element.defaultMessage; }
				    if (element.field == 'nhsid')  { document.getElementById('msg-nhsid-'+patient.id).innerHTML = element.defaultMessage; }
				    
				    
				    //this.mymessage = this.mymessage + element.defaultMessage + " ";
			  });
				
	          
	          
	        }
      );
  }
    
    
    
    
}
