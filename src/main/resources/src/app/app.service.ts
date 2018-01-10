import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

export class Foo {
  constructor(
    public id: number,
    public name: string,
    public nhsid: string) { }    
}

export class Crypto {
  constructor(
    public Id: string,
    public CoinName: string,
    public FullName: string,
    public TotalCoinSupply: number) { }    
}

export class Patient {
  constructor(
    public id: number,
    public name: string,
    public nhsid: string) { }    
}

@Injectable()
export class AppService {
  constructor(
    private _router: Router, private _http: Http){}

  obtainAccessToken(loginData){
    let params = new URLSearchParams();
    params.append('username',loginData.username);
    params.append('password',loginData.password);
    params.append('grant_type','password');
    params.append('scope','webclient');
    // params.append('client_id','fooClientIdPassword');
    // headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    // let headers = new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic '+btoa("fooClientIdPassword:secret")});

    let headers = new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic '+btoa("eagleeye:thisissecret")});
    // this._http.post(url, data, {headers: headers})
    let options = new RequestOptions({ headers: headers });


 	// http://51.141.9.85:5555/api/auth/auth/oauth/token
 	// http://51.141.9.85:8091/auth/oauth/token


    console.log(params.toString());
     this._http.post('http://51.141.9.85:5555/api/auth/auth/oauth/token', params.toString(), options)
    .map(res => res.json())
    .subscribe(
      data => this.saveToken(data),
      err => alert('Invalid Credentials')
    );
  }


  saveToken(token){
    var expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set("access_token", token.access_token, expireDate);
    console.log('Obtained Access token');
    this._router.navigate(['/']);
  }

  // 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
  getResource(resourceUrl) : Observable<Foo>{
    var headers = new Headers({'Authorization': 'Bearer '+Cookie.get('access_token')});
    console.log(Cookie.get('access_token'));

    var options = new RequestOptions({ headers: headers });
    return this._http.get(resourceUrl, options)
                   .map((res:Response) => res.json())
                   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getResourceHTML(resourceUrl) {
    var headers = new Headers({'Authorization': 'Bearer '+Cookie.get('access_token')});
    console.log(Cookie.get('access_token'));
    var options = new RequestOptions({ headers: headers });
    this._http.get(resourceUrl, options);
  }

  checkCredentials(){
    if (!Cookie.check('access_token')){
        this._router.navigate(['/login']);
    }
  }

  logout() {
    Cookie.delete('access_token');
    this._router.navigate(['/login']);
  }
  
  private foosUrl1 = 'http://51.141.9.85:5555/api/my-patient-microservice/demo/all';
    
  getAllPatientWithObservable(): Observable<Patient[]> {
    return this._http.get(this.foosUrl1)
        .map(this.extractData)
        .catch(this.handleErrorObservable);
  } 
	
  getPatientWithObservableById(id: string): Observable<Patient[]> {
    return this._http.get('http://51.141.9.85:5555/api/my-patient-microservice/demo/getpatientbyid?id='+id)
        .map(this.extractData)
        .catch(this.handleErrorObservable);
  } 
	
  getPatientWithObservableByName(name: string): Observable<Patient[]> {
    return this._http.get('http://51.141.9.85:5555/api/my-patient-microservice/demo/getpatientbyname?name='+name)
        .map(this.extractData)
        .catch(this.handleErrorObservable);
  } 
	
  getPatientWithObservableByNhsid(nhsid: string): Observable<Patient[]> {
    return this._http.get('http://51.141.9.85:5555/api/my-patient-microservice/demo/getpatientbynhsid?nhsid='+nhsid)
        .map(this.extractData)
        .catch(this.handleErrorObservable);
  } 
	  
  private extractData(res: Response) {
    let body = res.json();
    console.log("U " + body);
    return body;
  } 

  private handleErrorObservable (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.message || error);
  } 
    
  getAllCoins(): Observable<any> {
    return this._http.get("http://51.141.9.85:5555/api/my-crypto-microservice/crypto/list")
    //return this._http.get("http://localhost:8094/crypto/list")
        .map(this.extractData)
        .catch(this.handleErrorObservable);
  } 
	
  
}
