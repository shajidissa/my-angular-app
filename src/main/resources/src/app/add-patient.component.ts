import { Component, OnInit } from '@angular/core';
import {AppService, Patient} from './app.service'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ReactiveFormsModule, FormControl, FormGroup, Validators} from "@angular/forms";

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
    
    
    <!--
    <div class="col-md-4 mb-3">
      <label for="validationServerUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend3">@</span>
        </div>
        <input type="text" class="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required>
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer03">City</label>
      <input type="text" class="form-control is-invalid" id="validationServer03" placeholder="City" required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer04">State</label>
      <input type="text" class="form-control is-invalid" id="validationServer04" placeholder="State" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer05">Zip</label>
      <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Zip" required>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
    -->
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
    
    
    constructor(private _service:AppService, private _http: Http) {}

	ngOnInit(): void {
	   
	   this.userForm = new FormGroup({
	      Firstname: new FormControl('', Validators.required),
	      Lastname: new FormControl('', Validators.required),
	      NHSid: new FormControl('', Validators.required)
    	}); 

	}
	   
	//patient = new Patient();
	errorMessage: String;
	   
    onSubmit() {
    	console.log("onsubmit");
    	
    	this.namemessage = "";
    	this.nhsmessage = "";
    	
    	if (this.userForm.valid) {
      		console.log("valid");
      
      		let patient: Patient = new Patient(0,
          		this.userForm.controls['Firstname'].value + " " + this.userForm.controls['Lastname'].value,
          	this.userForm.controls['NHSid'].value);
          
            //this._service.createTodo(patient)
            
            
            //this._service.addPatientWithPromise(patient);
            
            this.addPatientWithPromise2(patient);
            //this.mymessage = "hbhbh";      
            
     /*       
          	this._service.createPatient3(patient).subscribe(
          		error => {
        			console.log("jjjj" + error);
      			},
      			
        (error) => this.handleSubmitError(error)     		
        	);
     */   	
          	
          	//this.userForm.reset();
      		// this.router.navigate(['/user']);
    	}
    	else {
    		console.log("invalid");
    		this.mymessage = "All values are mandatory.";
    	}
    }
    
  
  
  addPatientWithPromise2(patient:Patient) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
	  this._http.post("http://51.141.9.85:5555/api/my-patient-microservice/demo/createpatient4", patient, options)
	      .subscribe(
	        res => {
	          console.log("AAA" + res);
	          this.mymessage = "Added Patient";
	          this.userForm.reset();
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
				    
				    if (element.field == 'name') { this.namemessage = element.defaultMessage; }
				    if (element.field == 'nhsid')  { this.nhsmessage = element.defaultMessage; }
				    //this.mymessage = this.mymessage + element.defaultMessage + " ";
			  });
				
	          
	          
	        }
      );
  }
  
  addPatientWithPromise(patient:Patient): Promise<Patient> {
	let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post("http://51.141.9.85:5555/api/my-patient-microservice/demo/createpatient4", patient, options).toPromise()
	           .then(this.extractData1)
                   .catch(this.handleErrorPromise1);
    }		
    
     extractData1(res: Response) {
    console.log("U1 " + res);
    console.log("U2 " + res.status);
    this.mymessage = "resp status";
    //this.changeName();
    
  if (res != null) {
    let body = res.json();
    console.log("U " + body);
    return body;
  } else { // else return an empty dummy json, doesn't really work here
    return '[{"id": "", "userId": "", "userName": "", "type": { "name": "" }, "date": {' +
    '"startDate": "", "endDate": "", "startTime": "", "endTime": "" }   }]'; }
}

 handleErrorPromise1(error: Response | any) {
  console.log('Errorhandling triggered'); 
  let errMsg: string;
  if (error instanceof Response) {
    console.log('Errorhandling if-block'); // this triggers on a 404
    //const body = error.json() || '';
    
    //const err = body.error || JSON.stringify(body);
    const err = error;
    errMsg = `${error.status} - ${error.statusText || '' } ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error('Error ', errMsg); // this never appears in the log though
  return Observable.throw(errMsg);
}
  
 
 
  changeName():void{
    this.mymessage = 'New First Name';
  } 
  
  
  
  
  
  
  
   protected handleSubmitSuccess(entry: any) {
     console.log("handleSubmitSuccess");
   }
  
  
  
  
   protected handleSubmitError(error: any) {
	  console.log("handleSubmitError");
	  if (error.status === 400) {
	    const data = error.json();
	    
	    console.log(data);
	    
	    const fields = Object.keys(data || {});
	    fields.forEach((field) => {
	      //const control = this.findFieldControl(field);
	      //const errors = this.fetchFieldErrors(data, field);
	      //control.setErrors(errors);
	    });
	  }
	}
   
   
   
   
   
    
    
    
    
    
}
