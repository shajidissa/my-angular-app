import { Component, OnInit } from '@angular/core';
import {AppService, Patient, Crypto} from './app.service'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'view-favourite-cypto-details',
  providers: [AppService],
  template: `
  
  <home-header></home-header> 
  
  <div class="container-fluid">
    <h1 class="col-sm-12">Favourite Crypto Currencies</h1>
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
      <th>CoinCode</th>
      <th>CoinName</th>
      <th>ETH</th>
      <th>BTC</th>
      <th>Set SMS Alert</th>
      
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let crypto of cryptos; let i = index">
      
      <td><button class="btn btn-primary" (click)="removeCoin(crypto.id, i)">Remove</button></td>
      <td>{{crypto.coincode}}</td>
      <td>{{crypto.coinname}}</td>
      <td>{{crypto.eth}}</td>
      <td>{{crypto.btc}}</td>
      <td><button class="btn btn-primary" (click)="addAlertCoin(crypto.id, i)">Alert</button></td>
      
      
    </tr>
  </tbody>
</table>

</div>
</div>


 
  `
})





export class ViewFavouriteCryptoComponent {

    cryptos: any[] = [];   
    observableCryptos: Observable<any[]>;
    count: number;
    
    constructor(private _service:AppService, private _http: Http) {}

	ngOnInit(): void {
	    
        this.observableCryptos = this._service.getFavCryptosWithObservable()
        
        this.observableCryptos.subscribe(
      		cryptos => this.cryptos = cryptos
      	);     
      	
      	
      	setInterval(() => {
                this.observableCryptos.subscribe(
      				cryptos => this.cryptos = cryptos
      			); 
        }, 10000);
	}
	
	removeCoin(id : number, i : number) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
	  //this._http.delete("http://localhost:8094/crypto/delete/?id="+id, options)
	  this._http.delete("http://51.141.9.85:5555/api/my-crypto-microservice/crypto/delete/?id="+id, options)
	      .subscribe(
	        res => {
	          console.log("AAA" + res);
	          //document.getElementById('msg-saved-'+patient.id).innerHTML = "Saved";
	          this.cryptos.splice(i, 1);
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
	          
	          //this.mymessage = "";
	          
	          error4.errors.forEach(element => {
				    console.log(element.field);
				    console.log(element.defaultMessage);
				     
				    //if (element.field == 'name') { document.getElementById('msg-name-'+patient.id).innerHTML = element.defaultMessage; }
				    //if (element.field == 'nhsid')  { document.getElementById('msg-nhsid-'+patient.id).innerHTML = element.defaultMessage; }
				    
				    //this.mymessage = this.mymessage + element.defaultMessage + " ";
			  });
				
	        }
      );
    }
    

}
