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
	
	
	
	
private extractData2(res: Response) {
   let body = res.text();  // If response is a JSON use json()
   if (body) {
       return  body;
    } else {
       return {};
    }
}

private handleError2(error: any) {
   // In a real world app, we might use a remote logging infrastructure
   // We'd also dig deeper into the error to get a better message
   let errMsg = (error.message) ? error.message :
   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
}
	
	private handleError3(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
  
  createTodo(patient: Patient): Promise<Patient> {
    return this._http.post('http://51.141.9.85:5555/api/my-patient-microservice/demo/createpatient4', patient)
      .toPromise().then(response => response.json() as Patient)
      .catch(this.handleError3);
  }
  	
  createPatient3(patient: Patient): Observable<any> {
    return this._http.post("http://51.141.9.85:5555/api/my-patient-microservice/demo/createpatient4", patient)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
 
  }
  	
  createPatient(patient: Patient): Observable<Patient> {
     return this._http.post("http://51.141.9.85:5555/api/my-patient-microservice/demo/createpatient", patient)
     .map(this.extractData2)
     .catch(this.handleError2);
    
 
  }
  
  createPatient2(patient: Patient): Observable<Patient> {
    return this._http.post("http://51.141.9.85:5555/api/my-patient-microservice/demo/createpatient", patient)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
 
  }
  
  
  
  addPatientWithObservable(patient:Patient): Observable<Patient> {
	    let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post("http://51.141.9.85:5555/api/my-patient-microservice/demo/createpatient4", patient, options)
                   .map(this.extractData)
                   .catch(this.handleErrorObservable);
    }
    
    

    private handleErrorPromise (error: Response | any) {
	console.error("X " + error.message || error);
	console.error("Y " + error.errorCode)
	return Promise.reject(error.message || error);
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
    
  updatePatient(patient: Patient): Observable<Patient> {
    return this._http.put("http://51.141.9.85:5555/api/my-patient-microservice/demo/createpatient", patient)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
	
  
}
