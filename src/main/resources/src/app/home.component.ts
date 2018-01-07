import {Component} from '@angular/core';
import {AppService} from './app.service'
 
@Component({
    selector: 'home-header',
    providers: [AppService],
  template: `
  

    
    
    
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <!--<a class="navbar-brand" href="#">Navbar</a>-->
  <img  class="img-responsive" src="assets/images/ang.png">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        
      </li>
      <!--
      <li class="nav-item">
        <a class="nav-link" href="http://51.141.9.85:5555/api/my-patient-microservice/swagger-ui.html">Swagger 2.0</a>
      </li>
      -->
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownSwagger" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Swagger
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" target="_blank" href="http://51.141.9.85:5555/api/my-patient-microservice/swagger-ui.html">Patients</a>        
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Actions
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" routerLink="/viewpatients">View Patients</a>
          <a class="dropdown-item" routerLink="/addpatient">Add a Patient</a>
          <a class="dropdown-item" routerLink="/findpatient">Find/Edit a Patient</a>  
          <a class="dropdown-item" routerLink="/deletepatient">Delete Patient</a> 
                
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" routerLink="/foo">Something else here!!</a>
          
        </div>
      </li>
      <!--
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
      -->
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-success my-2 my-sm-0"(click)="logout()">Logout</button>
    </form>
  </div>
</nav>
    
    
    <!-- <foo-details></foo-details> -->
    <!-- <patient-details></patient-details>-->
`
})
 
export class HomeComponent {
 
   
    constructor(private _service:AppService){}
 
    ngOnInit(){
        this._service.checkCredentials();
    }
 
    logout() {
        this._service.logout();
    }
    
    //gotoDetail(): void {
    //this.router.navigate(['/detail']);
  //}
    
}