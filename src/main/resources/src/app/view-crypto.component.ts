import { Component, OnInit } from '@angular/core';
import {AppService, Patient, Crypto} from './app.service'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'view-cypto-details',
  providers: [AppService],
  template: `
  
  <home-header></home-header> 
  
  <div class="container-fluid">
    <h1 class="col-sm-12">View Crypto Currencies</h1>
  </div>

<!--
<div class="container">
 <div class="col-xs-9">
	<select style="width:223px;" class="form-control" id="searchtype" [(ngModel)]="searchtype" >
	    <option value="" selected>Choose...</option>
	    <option value="id">Id</option>
	    <option value="name">Name</option>
	    <option value="nhsid">NHS Id</option>
	</select>
 </div>
 </div>
 -->
 
 <div class="container">
 <div class="row">
 <table class="table table-bordered">
  <thead>
    <tr>
      <th>Favourites</th>
      <th>#</th>
      <th>CoinName</th>
      <th>FullName</th>
      <th>TotalCoinSupply</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let crypto of cryptos">
      <td><button class="btn btn-primary" (click)="getPatient()">Add</button></td>
      
      <th scope="row">{{crypto.Id}}</th>
      <td>{{crypto.CoinName}}</td>
      <td>{{crypto.FullName}}</td>
      <td>{{crypto.TotalCoinSupply}}</td>
    </tr>
  </tbody>
</table>

</div>
</div>

 
  `
})





export class ViewCryptoComponent {

    cryptos: Crypto[] = [];   
    observableCryptos: Observable<any>
    
    constructor(private _service:AppService, private _http: Http) {}

	ngOnInit(): void {
	    
        this.observableCryptos = this._service.getAllCoins()
        
        this.observableCryptos.subscribe(
      		data => {
      		
      		
	      		const resp = JSON.stringify(data);
	      		//console.log(resp);
	      		
	      		const json = JSON.parse(resp)
	      		
	      		//console.log(json.Response);
	      		//console.log(json.Data);
	      		
	      		var count = Object.keys(json.Data).length;
	          
	          	console.log("count =" + count );
	      		
	      		const dictionary = json.Data;
	      		
	      		for (var key in dictionary) {
				    				     
				         this.cryptos.push({ 'Id': key,
				        					'CoinName': dictionary[key].CoinName,
				        					'FullName': dictionary[key].FullName,
				        					'TotalCoinSupply': dictionary[key].TotalCoinSupply});				        
				}

	      		
      		}
      	);     
	}

}
