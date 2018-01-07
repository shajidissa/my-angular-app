webpackJsonp([1,3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(_service) {
        this._service = _service;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this._service.checkCredentials();
    };
    HomeComponent.prototype.logout = function () {
        this._service.logout();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'home-header',
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]],
        template: "\n  \n\n    \n    \n    \n    \n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <!--<a class=\"navbar-brand\" href=\"#\">Navbar</a>-->\n  <img  class=\"img-responsive\" src=\"assets/images/ang.png\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        \n      </li>\n      <!--\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"http://51.141.9.85:5555/api/my-patient-microservice/swagger-ui.html\">Swagger 2.0</a>\n      </li>\n      -->\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownSwagger\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Swagger\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" target=\"_blank\" href=\"http://51.141.9.85:5555/api/my-patient-microservice/swagger-ui.html\">Patients</a>        \n        </div>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Actions\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" routerLink=\"/viewpatients\">View Patients</a>\n          <a class=\"dropdown-item\" routerLink=\"/addpatient\">Add a Patient</a>\n          <a class=\"dropdown-item\" routerLink=\"/findpatient\">Find/Edit a Patient</a>  \n          <a class=\"dropdown-item\" routerLink=\"/deletepatient\">Delete Patient</a> \n                \n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" routerLink=\"/foo\">Something else here!!</a>\n          \n        </div>\n      </li>\n      <!--\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n      -->\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\"(click)=\"logout()\">Logout</button>\n    </form>\n  </div>\n</nav>\n    \n    \n    <!-- <foo-details></foo-details> -->\n    <!-- <patient-details></patient-details>-->\n"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(_service) {
        this._service = _service;
        this.loginData = { username: "admin", password: "admin" };
    }
    LoginComponent.prototype.login = function () {
        this._service.obtainAccessToken(this.loginData);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'login-form',
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]],
        styles: [__webpack_require__(160)],
        template: "\n  \n<body class=\"my-login-page\">  \n<section class=\"h-100\">\n\t\t<div class=\"container h-100\">\n\t\t\t<div class=\"row justify-content-md-center h-100\">\n\t\t\t\t<div class=\"card-wrapper\">\n\t\t\t\t\t<div class=\"brand\">\n\t\t\t\t\t\t<img src=\"../assets/images/ang.png\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card fat\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h4 class=\"card-title\">Login</h4>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Username</label>\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" [(ngModel)]=\"loginData.username\" />\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<label for=\"password\">Password\n\t\t\t\t\t\t\t\t\t\t<!--\n\t\t\t\t\t\t\t\t\t\t<a href=\"forgot.html\" class=\"float-right\">\n\t\t\t\t\t\t\t\t\t\t\tForgot Password?\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"password\"  [(ngModel)]=\"loginData.password\"/>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<!--\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"remember\"> Remember Me\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div\n\t\t\t\t\t\t\t\t-->\n\n\t\t\t\t\t\t\t\t<div class=\"form-group no-margin\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary pull-right\" (click)=\"login()\" type=\"submit\">Login</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"footer\">\n\t\t\t\t\t\tCopyright &copy; 2018 &mdash; Saj Issa \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t</body>\n\t\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientComponent = (function () {
    function PatientComponent(_service, _http) {
        this._service = _service;
        this._http = _http;
        this.patient = new __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* Patient */](1, 'sample foo', 'kk');
        this.patientsUrl = 'http://51.141.9.85:5555/api/my-patient-microservice/demo/getpatient?id=1';
    }
    PatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.observableFoos = this.getAllPatientWithObservable()
        this.observablePatients = this._service.getAllPatientWithObservable();
        this.observablePatients.subscribe(function (patients) { return _this.patients = patients; });
    };
    // this.foosUrl+this.foo.id
    PatientComponent.prototype.getPatient = function () {
        var _this = this;
        this._service.getResource(this.patientsUrl)
            .subscribe(function (data) { return _this.patient = data; }, function (error) { return _this.patient.name = 'Error'; });
    };
    return PatientComponent;
}());
PatientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'patient-details',
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]],
        template: "\n  \n   <home-header></home-header> \n  \n  <div class=\"container-fluid\">\n    <h1 class=\"col-sm-12\">All Patients</h1>\n</div>\n\n\n \n <div class=\"container\">\n <div class=\"row\">\n <table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Name</th>\n      <th>NHS ID</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let patient of patients\">\n      <th scope=\"row\">{{patient.id}}</th>\n      <td>{{patient.name}}</td>\n      <td>{{patient.nhsid}}</td>\n    </tr>\n  </tbody>\n</table>\n\n </div>\n </div>\n \n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], PatientComponent);

var _a, _b;
//# sourceMappingURL=patient.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPatientsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewPatientsComponent = (function () {
    function ViewPatientsComponent(_service, _http) {
        this._service = _service;
        this._http = _http;
        this.patient = new __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* Patient */](1, 'sample foo', 'kk');
        this.patientsUrl = 'http://51.141.9.85:5555/api/my-patient-microservice/demo/getpatient?id=1';
    }
    ViewPatientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.observableFoos = this.getAllPatientWithObservable()
        this.observablePatients = this._service.getAllPatientWithObservable();
        this.observablePatients.subscribe(function (patients) { return _this.patients = patients; });
    };
    // this.foosUrl+this.foo.id
    ViewPatientsComponent.prototype.getPatient = function () {
        var _this = this;
        this._service.getResource(this.patientsUrl)
            .subscribe(function (data) { return _this.patient = data; }, function (error) { return _this.patient.name = 'Error'; });
    };
    return ViewPatientsComponent;
}());
ViewPatientsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'view-patients-details',
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]],
        template: "\n  \n   <home-header></home-header> \n  \n  <div class=\"container-fluid\">\n    <h1 class=\"col-sm-12\">All Patients</h1>\n</div>\n\n\n \n <div class=\"container\">\n <div class=\"row\">\n <table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Name</th>\n      <th>NHS ID</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let patient of patients\">\n      <th scope=\"row\">{{patient.id}}</th>\n      <td>{{patient.name}}</td>\n      <td>{{patient.nhsid}}</td>\n    </tr>\n  </tbody>\n</table>\n\n </div>\n </div>\n \n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], ViewPatientsComponent);

var _a, _b;
//# sourceMappingURL=view-patients.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Foo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Patient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Foo = (function () {
    function Foo(id, name, nhsid) {
        this.id = id;
        this.name = name;
        this.nhsid = nhsid;
    }
    return Foo;
}());

var Patient = (function () {
    function Patient(id, name, nhsid) {
        this.id = id;
        this.name = name;
        this.nhsid = nhsid;
    }
    return Patient;
}());

var AppService = (function () {
    function AppService(_router, _http) {
        this._router = _router;
        this._http = _http;
        this.foosUrl1 = 'http://51.141.9.85:5555/api/my-patient-microservice/demo/all';
    }
    AppService.prototype.obtainAccessToken = function (loginData) {
        var _this = this;
        var params = new URLSearchParams();
        params.append('username', loginData.username);
        params.append('password', loginData.password);
        params.append('grant_type', 'password');
        params.append('scope', 'webclient');
        // params.append('client_id','fooClientIdPassword');
        // headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        // let headers = new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic '+btoa("fooClientIdPassword:secret")});
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic ' + btoa("eagleeye:thisissecret") });
        // this._http.post(url, data, {headers: headers})
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // http://51.141.9.85:5555/api/auth/auth/oauth/token
        // http://51.141.9.85:8091/auth/oauth/token
        console.log(params.toString());
        this._http.post('http://51.141.9.85:5555/api/auth/auth/oauth/token', params.toString(), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.saveToken(data); }, function (err) { return alert('Invalid Credentials'); });
    };
    AppService.prototype.saveToken = function (token) {
        var expireDate = new Date().getTime() + (1000 * token.expires_in);
        __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].set("access_token", token.access_token, expireDate);
        console.log('Obtained Access token');
        this._router.navigate(['/']);
    };
    // 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
    AppService.prototype.getResource = function (resourceUrl) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]({ 'Authorization': 'Bearer ' + __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].get('access_token') });
        console.log(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].get('access_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(resourceUrl, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    AppService.prototype.getResourceHTML = function (resourceUrl) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]({ 'Authorization': 'Bearer ' + __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].get('access_token') });
        console.log(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].get('access_token'));
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this._http.get(resourceUrl, options);
    };
    AppService.prototype.checkCredentials = function () {
        if (!__WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].check('access_token')) {
            this._router.navigate(['/login']);
        }
    };
    AppService.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].delete('access_token');
        this._router.navigate(['/login']);
    };
    AppService.prototype.getAllPatientWithObservable = function () {
        return this._http.get(this.foosUrl1)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    AppService.prototype.extractData2 = function (res) {
        var body = res.text(); // If response is a JSON use json()
        if (body) {
            return body;
        }
        else {
            return {};
        }
    };
    AppService.prototype.handleError2 = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    AppService.prototype.handleError3 = function (error) {
        console.error('Some error occured', error);
        return Promise.reject(error.message || error);
    };
    AppService.prototype.createTodo = function (patient) {
        return this._http.post('http://51.141.9.85:5555/api/my-patient-microservice/demo/createpatient4', patient)
            .toPromise().then(function (response) { return response.json(); })
            .catch(this.handleError3);
    };
    AppService.prototype.createPatient3 = function (patient) {
        return this._http.post("http://51.141.9.85:5555/api/my-patient-microservice/demo/createpatient4", patient)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    AppService.prototype.createPatient = function (patient) {
        return this._http.post("http://51.141.9.85:5555/api/my-patient-microservice/demo/createpatient", patient)
            .map(this.extractData2)
            .catch(this.handleError2);
    };
    AppService.prototype.createPatient2 = function (patient) {
        return this._http.post("http://51.141.9.85:5555/api/my-patient-microservice/demo/createpatient", patient)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    AppService.prototype.addPatientWithObservable = function (patient) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post("http://51.141.9.85:5555/api/my-patient-microservice/demo/createpatient4", patient, options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    AppService.prototype.handleErrorPromise = function (error) {
        console.error("X " + error.message || error);
        console.error("Y " + error.errorCode);
        return Promise.reject(error.message || error);
    };
    AppService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("U " + body);
        return body;
    };
    AppService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error.message || error);
    };
    AppService.prototype.updatePatient = function (patient) {
        return this._http.put("http://51.141.9.85:5555/api/my-patient-microservice/demo/createpatient", patient)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return AppService;
}());
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object])
], AppService);

var _a, _b;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(159)(false);
// imports


// module
exports.push([module.i, "html,body {\n\theight: 100%;\n}\n\nbody.my-login-page {\n\tbackground-color: #f7f9fb;\n\tfont-size: 14px;\n}\n\n.my-login-page .brand {\n\twidth: 90px;\n\theight: 90px;\n\toverflow: hidden;\n\tborder-radius: 50%;\n\tmargin: 0 auto;\n\tmargin: 40px auto;\n\tbox-shadow: 0 0 40px rgba(0,0,0,.05);\n}\n\n.my-login-page .brand img {\n\twidth: 100%;\n}\n\n.my-login-page .card-wrapper {\n\twidth: 400px;\n\tmargin: 0 auto;\n}\n\n.my-login-page .card {\n\tborder-color: transparent;\n\tbox-shadow: 0 0 40px rgba(0,0,0,.05);\n}\n\n.my-login-page .card.fat {\n\tpadding: 10px;\n}\n\n.my-login-page .card .card-title {\n\tmargin-bottom: 30px;\n}\n\n.my-login-page .form-control {\n\tborder-width: 2.3px;\n}\n\n.my-login-page .form-group label {\n\twidth: 100%;\n}\n\n.my-login-page .btn.btn-block {\n\tpadding: 12px 10px;\n}\n\n.my-login-page .margin-top20 {\n\tmargin-top: 20px;\n}\n\n.my-login-page .no-margin {\n\tmargin: 0;\n}\n\n.my-login-page .footer {\n\tmargin: 40px 0;\n\tcolor: #888;\n\ttext-align: center;\n}\n\n@media screen and (max-width: 425px) {\n\t.my-login-page .card-wrapper {\n\t\twidth: 90%;\n\t\tmargin: 0 auto;\n\t}\n}\n\n@media screen and (max-width: 320px) {\n\t.my-login-page .card.fat {\n\t\tpadding: 0;\n\t}\n\n\t.my-login-page .card.fat .card-body {\n\t\tpadding: 15px;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),

/***/ 89:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 89;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(104);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPatientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddPatientComponent = (function () {
    function AddPatientComponent(_service, _http) {
        this._service = _service;
        this._http = _http;
        this.mymessage = '';
        this.namemessage = '';
        this.nhsmessage = '';
    }
    AddPatientComponent.prototype.ngOnInit = function () {
        this.userForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            Firstname: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required),
            Lastname: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required),
            NHSid: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required)
        });
    };
    AddPatientComponent.prototype.onSubmit = function () {
        console.log("onsubmit");
        this.namemessage = "";
        this.nhsmessage = "";
        if (this.userForm.valid) {
            console.log("valid");
            var patient = new __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* Patient */](0, this.userForm.controls['Firstname'].value + " " + this.userForm.controls['Lastname'].value, this.userForm.controls['NHSid'].value);
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
    };
    AddPatientComponent.prototype.addPatientWithPromise2 = function (patient) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this._http.post("http://51.141.9.85:5555/api/my-patient-microservice/demo/createpatient4", patient, options)
            .subscribe(function (res) {
            console.log("AAA" + res);
            _this.mymessage = "Added Patient";
            _this.userForm.reset();
        }, function (err) {
            console.log("Error occured1" + err);
            var body = err.json() || '';
            //const error3 = body.error || JSON.stringify(body);
            var error3 = JSON.stringify(body);
            var error4 = JSON.parse(error3);
            console.log("Error occured2 =" + error3);
            //console.log("Error occured3 = " + error4.errorCode );
            console.log("Error occured4 =" + error4.status);
            var count = Object.keys(error4.errors).length;
            console.log("Error occured5 =" + count);
            _this.mymessage = "";
            error4.errors.forEach(function (element) {
                console.log(element.field);
                console.log(element.defaultMessage);
                if (element.field == 'name') {
                    _this.namemessage = element.defaultMessage;
                }
                if (element.field == 'nhsid') {
                    _this.nhsmessage = element.defaultMessage;
                }
                //this.mymessage = this.mymessage + element.defaultMessage + " ";
            });
        });
    };
    AddPatientComponent.prototype.addPatientWithPromise = function (patient) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post("http://51.141.9.85:5555/api/my-patient-microservice/demo/createpatient4", patient, options).toPromise()
            .then(this.extractData1)
            .catch(this.handleErrorPromise1);
    };
    AddPatientComponent.prototype.extractData1 = function (res) {
        console.log("U1 " + res);
        console.log("U2 " + res.status);
        this.mymessage = "resp status";
        //this.changeName();
        if (res != null) {
            var body = res.json();
            console.log("U " + body);
            return body;
        }
        else {
            return '[{"id": "", "userId": "", "userName": "", "type": { "name": "" }, "date": {' +
                '"startDate": "", "endDate": "", "startTime": "", "endTime": "" }   }]';
        }
    };
    AddPatientComponent.prototype.handleErrorPromise1 = function (error) {
        console.log('Errorhandling triggered');
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Response */]) {
            console.log('Errorhandling if-block'); // this triggers on a 404
            //const body = error.json() || '';
            //const err = body.error || JSON.stringify(body);
            var err = error;
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error('Error ', errMsg); // this never appears in the log though
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    AddPatientComponent.prototype.changeName = function () {
        this.mymessage = 'New First Name';
    };
    AddPatientComponent.prototype.handleSubmitSuccess = function (entry) {
        console.log("handleSubmitSuccess");
    };
    AddPatientComponent.prototype.handleSubmitError = function (error) {
        console.log("handleSubmitError");
        if (error.status === 400) {
            var data = error.json();
            console.log(data);
            var fields = Object.keys(data || {});
            fields.forEach(function (field) {
                //const control = this.findFieldControl(field);
                //const errors = this.fetchFieldErrors(data, field);
                //control.setErrors(errors);
            });
        }
    };
    return AddPatientComponent;
}());
AddPatientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'add-patient',
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]],
        template: "\n  \n   <home-header></home-header> \n  \n  <div class=\"container-fluid\">\n    <h1 class=\"col-sm-12\">Add a Patient</h1>\n</div>\n\n\n <div class=\"container\">\n <div class=\"row\">\n  <form novalidate [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-row\">\n    <div class=\"col-md-4 mb-3\">\n      <label for=\"validationServer01\">First name</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationServer01\" formControlName=\"Firstname\" placeholder=\"First name\" required>\n    <div  style=\"color:red; font-size: 11px;\">\n          {{ namemessage }}\n        </div>\n    </div>\n    <div class=\"col-md-4 mb-3\">\n      <label for=\"validationServer02\">Last name</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationServer02\" formControlName=\"Lastname\" placeholder=\"Last name\" required>\n    </div>\n    <div class=\"col-md-4 mb-3\">\n      <label for=\"validationServer03\">NHS id</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationServer03\" formControlName=\"NHSid\" placeholder=\"NHS id\" required>\n\t  <div  style=\"color:red; font-size: 11px;\">\n          {{ nhsmessage }}\n        </div>\n\n    </div>\n    \n    \n    <!--\n    <div class=\"col-md-4 mb-3\">\n      <label for=\"validationServerUsername\">Username</label>\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"inputGroupPrepend3\">@</span>\n        </div>\n        <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServerUsername\" placeholder=\"Username\" aria-describedby=\"inputGroupPrepend3\" required>\n        <div class=\"invalid-feedback\">\n          Please choose a username.\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"col-md-6 mb-3\">\n      <label for=\"validationServer03\">City</label>\n      <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServer03\" placeholder=\"City\" required>\n      <div class=\"invalid-feedback\">\n        Please provide a valid city.\n      </div>\n    </div>\n    <div class=\"col-md-3 mb-3\">\n      <label for=\"validationServer04\">State</label>\n      <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServer04\" placeholder=\"State\" required>\n      <div class=\"invalid-feedback\">\n        Please provide a valid state.\n      </div>\n    </div>\n    <div class=\"col-md-3 mb-3\">\n      <label for=\"validationServer05\">Zip</label>\n      <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServer05\" placeholder=\"Zip\" required>\n      <div class=\"invalid-feedback\">\n        Please provide a valid zip.\n      </div>\n    </div>\n    -->\n  </div>\n  \n  \n  <button class=\"btn btn-primary\" type=\"submit\">Add</button>\n</form>\n\n    \n  </div>\n  <br>\n  <div class=\"container\">\n  <label>{{ mymessage }}</label>\n  </div>\n  \n  \n </div>\n \n \n <script>\n// Example starter JavaScript for disabling form submissions if there are invalid fields\n(function() {\n  'use strict';\n\n  window.addEventListener('load', function() {\n    var form = document.getElementById('needs-validation');\n    form.addEventListener('submit', function(event) {\n      if (form.checkValidity() === false) {\n        event.preventDefault();\n        event.stopPropagation();\n      }\n      form.classList.add('was-validated');\n    }, false);\n  }, false);\n})();\n</script>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], AddPatientComponent);

var _a, _b;
//# sourceMappingURL=add-patient.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: "\n<router-outlet></router-outlet>"
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_description_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__foo_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__patient_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__view_patients_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__add_patient_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__find_patient_component__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_description_component__["a" /* HomeDescriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__foo_component__["a" /* FooComponent */],
            __WEBPACK_IMPORTED_MODULE_10__patient_component__["a" /* PatientComponent */],
            __WEBPACK_IMPORTED_MODULE_11__view_patients_component__["a" /* ViewPatientsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__add_patient_component__["a" /* AddPatientComponent */],
            __WEBPACK_IMPORTED_MODULE_13__find_patient_component__["a" /* FindPatientComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_8__home_description_component__["a" /* HomeDescriptionComponent */] },
                { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_component__["a" /* LoginComponent */] },
                { path: 'viewpatients2', component: __WEBPACK_IMPORTED_MODULE_10__patient_component__["a" /* PatientComponent */] },
                { path: 'viewpatients', component: __WEBPACK_IMPORTED_MODULE_11__view_patients_component__["a" /* ViewPatientsComponent */] },
                { path: 'addpatient', component: __WEBPACK_IMPORTED_MODULE_12__add_patient_component__["a" /* AddPatientComponent */] },
                { path: 'findpatient', component: __WEBPACK_IMPORTED_MODULE_13__find_patient_component__["a" /* FindPatientComponent */] },
                { path: 'foo', component: __WEBPACK_IMPORTED_MODULE_9__foo_component__["a" /* FooComponent */] }
            ])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindPatientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FindPatientComponent = (function () {
    function FindPatientComponent(_service, _http) {
        this._service = _service;
        this._http = _http;
        this.mymessage = '';
    }
    FindPatientComponent.prototype.ngOnInit = function () {
        //this.xxx = "kk"
    };
    // this.foosUrl+this.foo.id
    FindPatientComponent.prototype.getPatient = function () {
        this.mymessage = 'xxx = ' + this.xxx + ' searchtype = ' + this.searchtype;
        if (this.searchtype == "undefined" || this.searchtype == "0") {
            this.mymessage = "Please select a value from dropdown";
        }
    };
    return FindPatientComponent;
}());
FindPatientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'find-patient',
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]],
        template: "\n  \n   <home-header></home-header> \n  \n  <div class=\"container-fluid\">\n    <h1 class=\"col-sm-12\">Find/Edit Patients</h1>\n</div>\n\n\n<div class=\"container\">\n\t\n\t\t<div class=\"form-group row\">\n\t\t\t\t<div class=\"col-xs-9\">\n\t\t\t\t    <input class=\"form-control\" type=\"text\" id=\"search\" [(ngModel)]=\"xxx\" placeholder=\"Search\">\t\t\t\t\t\n\t\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group row\">\n\t\t\t\t<div class=\"col-xs-9\">\n\t\t\t\t\t<select class=\"form-control\" id=\"searchtype\" [(ngModel)]=\"searchtype\" >\n\t\t\t\t\t    <option selected>Choose...</option>\n\t\t\t\t\t    <option value=\"1\">Id</option>\n\t\t\t\t\t    <option value=\"2\">Name</option>\n\t\t\t\t\t    <option value=\"3\">NHS Id</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group row\">\n\t\t\t<div class=\"offset-xs-3 col-xs-9\">\n\t\t\t\t<button class=\"btn btn-primary\" (click)=\"getPatient()\">Search</button>\n\t\t\t</div>\n\t\t</div>\n\t\n</div>\n \n  <br>\n  <div class=\"container\">\n  <label>{{ mymessage }}</label>\n  </div>\n   \n \n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], FindPatientComponent);

var _a, _b;
//# sourceMappingURL=find-patient.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooComponent = (function () {
    function FooComponent(_service, _http) {
        this._service = _service;
        this._http = _http;
        this.foo = new __WEBPACK_IMPORTED_MODULE_1__app_service__["c" /* Foo */](1, 'sample foo', 'kk');
        this.foosUrl = 'http://51.141.9.85:5555/api/my-patient-microservice/demo/getpatient?id=1';
    }
    FooComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.observableFoos = this.getAllPatientWithObservable()
        this.observableFoos = this._service.getAllPatientWithObservable();
        this.observableFoos.subscribe(function (foos) { return _this.foos = foos; });
    };
    // this.foosUrl+this.foo.id
    FooComponent.prototype.getFoo = function () {
        var _this = this;
        this._service.getResource(this.foosUrl)
            .subscribe(function (data) { return _this.foo = data; }, function (error) { return _this.foo.name = 'Error'; });
    };
    return FooComponent;
}());
FooComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'foo-details',
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]],
        template: "\n  \n  <home-header></home-header>\n  <div class=\"container\">\n    <h1 class=\"col-sm-12\">Foo Details</h1>\n    <div class=\"col-sm-12\">\n        <label class=\"col-sm-3\">ID</label> <span>{{foo.id}}</span>\n    </div>\n    <div class=\"col-sm-12\">\n        <label class=\"col-sm-3\">Name</label> <span>{{foo.name}}</span>\n    </div>\n    <div class=\"col-sm-12\">\n        <button class=\"btn btn-primary\" (click)=\"getFoo()\" type=\"submit\">New Foo</button>        \n    </div>\n</div>\n\n<ul>\n<li *ngFor=\"let foo of foos\">\n    id: {{foo.id}}, name: {{foo.name}}, nhsid: {{foo.nhsid}}\n  </li>\n </ul>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], FooComponent);

var _a, _b;
//# sourceMappingURL=foo.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDescriptionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeDescriptionComponent = (function () {
    function HomeDescriptionComponent(_service) {
        this._service = _service;
    }
    return HomeDescriptionComponent;
}());
HomeDescriptionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'home-description-details',
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]],
        template: " \n  \n  <home-header></home-header>\n  <br>\n  <div class=\"container\">\n    This is a simple Oauth2 Angular4, Spring Microservices example.\n    <br>\n    <br>\n    The Spring discovery service Eurareka is : <a href=\"http://51.141.9.85:8761\" target=\"_blank\">http://51.141.9.85:8761</a>\n    \n  </div>\n\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object])
], HomeDescriptionComponent);

var _a;
//# sourceMappingURL=home-description.component.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.bundle.js.map