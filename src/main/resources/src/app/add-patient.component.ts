import { Component, OnInit } from '@angular/core';
import {AppService, Patient} from './app.service'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'add-patient',
  providers: [AppService],
  template: `
  
   <home-header></home-header> 
  
  <div class="container-fluid">
    <h1 class="col-sm-12">Add a Patient</h1>
</div>


 <div class="container">
 <div class="row">
  <form novalidate [formGroup]="userForm" (ngSubmit)="onSubmit()">
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationServer01">First name</label>
      <input type="text" class="form-control" id="validationServer01" formControlName="Firstname" placeholder="First name" required>
      <div  style="color:red; font-size: 11px;">
          {{ namemessage }}
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServer02">Last name</label>
      <input type="text" class="form-control" id="validationServer02" formControlName="Lastname" placeholder="Last name" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServer03">NHS id</label>
      <input type="text" class="form-control" id="validationServer03" formControlName="NHSid" placeholder="NHS id" required>
	  <div  style="color:red; font-size: 11px;">
          {{ nhsmessage }}
        </div>

    </div>
  </div>
    
  <button class="btn btn-primary" type="submit">Add</button>
  </form>
    
  </div>
  <br>
  <div class="container">
  <label>{{ mymessage }}</label>
  </div>
  
 </div>
 
 
 <script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';

  window.addEventListener('load', function() {
    var form = document.getElementById('needs-validation');
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  }, false);
})();
</script>
  `
})

export class AddPatientComponent {

    userForm: FormGroup;
    mymessage: string = '';
    namemessage: string = '';
    nhsmessage: string = '';
    errorMessage: String;
    
    constructor(private _service:AppService, private _http: Http) {}

	ngOnInit(): void {
	   
	   this.userForm = new FormGroup({
	      Firstname: new FormControl('', Validators.required),
	      Lastname: new FormControl('', Validators.required),
	      NHSid: new FormControl('', Validators.required)
    	}); 

	}
	      
    onSubmit() {
    	console.log("onsubmit");
    	
    	this.namemessage = "";
    	this.nhsmessage = "";
    	
    	if (this.userForm.valid) {
      		console.log("valid");
      
      		let patient: Patient = new Patient(0,this.userForm.controls['Firstname'].value + " " + this.userForm.controls['Lastname'].value,
          	this.userForm.controls['NHSid'].value);
          
            this.addPatientWithPromise(patient);
            
          	// this.userForm.reset();
      		// this.router.navigate(['/user']);
    	}
    	else {
    		console.log("invalid");
    		this.mymessage = "All values are mandatory.";
    	}
    }
      
  addPatientWithPromise(patient:Patient) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
	  this._http.post("http://51.141.9.85:5555/api/my-patient-microservice/demo/createpatient", patient, options)
	      .subscribe(
	        res => {
	          console.log("AAA" + res);
	          this.mymessage = "Added Patient";
	          this.userForm.reset();
	        },
	        err => {
	          console.log("Error occured1" + err);
	          const body = err.json() || '';   
    		  const error3 = JSON.stringify(body);		  
    		  const error4 = JSON.parse(error3)
	          
	          console.log("Error occured2 =" + error3 );
	          console.log("Error occured4 =" + error4.status );
	          
	          var count = Object.keys(error4.errors).length;
	          
	          console.log("Error occured5 =" + count );
	          
	          this.mymessage = "";
	          
	          error4.errors.forEach(element => {
				    console.log(element.field);
				    console.log(element.defaultMessage);				    
				    if (element.field == 'name') { this.namemessage = element.defaultMessage; }
				    if (element.field == 'nhsid')  { this.nhsmessage = element.defaultMessage; }			    
			  });
	        }
      );
  }
    
    
}
