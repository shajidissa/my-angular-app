import { Component, OnInit } from '@angular/core';
import {AppService, Patient} from './app.service'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'view-patients-details',
  providers: [AppService],
  template: `
  
  <home-header></home-header> 
  
  <div class="container-fluid">
    <h1 class="col-sm-12">All Patients</h1>
  </div>

 <div class="container">
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

export class ViewPatientsComponent {

    patients: Patient[];   
    observablePatients: Observable<Patient[]>
    
    constructor(private _service:AppService, private _http: Http) {}

	ngOnInit(): void {
	    
        this.observablePatients = this._service.getAllPatientWithObservable()
        
        this.observablePatients.subscribe(
      		patients => this.patients = patients
      	);     
	}

}
