webpackJsonp([1,3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(8);
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
        template: "\n    \n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <!--<a class=\"navbar-brand\" href=\"#\">Navbar</a>-->\n  <img  class=\"img-responsive\" src=\"assets/images/ang.png\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        \n      </li>\n      <!--\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"http://51.141.9.85:5555/api/my-patient-microservice/swagger-ui.html\">Patient - Swagger 2.0</a>\n        \n      \n      </li>\n      -->\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownSwagger\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Swagger\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" target=\"_blank\" href=\"http://51.141.9.85:5555/api/my-patient-microservice/swagger-ui.html\">Patients</a>        \n          <a class=\"dropdown-item\" target=\"_blank\" href=\"http://51.141.9.85:5555/api/my-crypto-microservice/swagger-ui.html\">Crypto</a>        \n          \n        </div>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Actions\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" routerLink=\"/viewpatients\">View Patients</a>\n          <a class=\"dropdown-item\" routerLink=\"/addpatient\">Add a Patient</a>\n          <a class=\"dropdown-item\" routerLink=\"/findpatient\">Find/Edit/Delete a Patient</a>  \n                \n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" routerLink=\"/foo\">Something else here!!</a>\n          <a class=\"dropdown-item\" routerLink=\"/viewcrypto\">View Crypto</a>\n          <a class=\"dropdown-item\" routerLink=\"/viewfavouritecrypto\">Favourite Crypto</a>\n          \n        </div>\n      </li>\n      \n       <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Apis\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" target=\"_blank\" href=\"https://www.cryptocompare.com/api/#-api-data-price-\">Crypto Compare</a>\n          <a class=\"dropdown-item\" target=\"_blank\" href=\"https://www.twilio.com/console/project/settings\">Twilio Api</a>      \n        </div>\n      </li>\n      \n      <!--\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n      -->\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\"(click)=\"logout()\">Logout</button>\n    </form>\n  </div>\n</nav>\n    \n    \n    <!-- <foo-details></foo-details> -->\n    <!-- <patient-details></patient-details>-->\n"
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(8);
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
        styles: [__webpack_require__(161)],
        template: "\n  \n  <body class=\"my-login-page\">  \n  <section class=\"h-100\">\n\t\t<div class=\"container h-100\">\n\t\t\t<div class=\"row justify-content-md-center h-100\">\n\t\t\t\t<div class=\"card-wrapper\">\n\t\t\t\t\t<div class=\"brand\">\n\t\t\t\t\t\t<img src=\"../assets/images/ang.png\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card fat\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h4 class=\"card-title\">Login</h4>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Username</label>\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" [(ngModel)]=\"loginData.username\" />\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<label for=\"password\">Password\n\t\t\t\t\t\t\t\t\t\t<!--\n\t\t\t\t\t\t\t\t\t\t<a href=\"forgot.html\" class=\"float-right\">\n\t\t\t\t\t\t\t\t\t\t\tForgot Password?\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"password\"  [(ngModel)]=\"loginData.password\"/>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<!--\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"remember\"> Remember Me\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div\n\t\t\t\t\t\t\t\t-->\n\n\t\t\t\t\t\t\t\t<div class=\"form-group no-margin\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary pull-right\" (click)=\"login()\" type=\"submit\">Login</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"footer\">\n\t\t\t\t\t\tCopyright &copy; 2018 &mdash; Saj Issa \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t</body>\n\t\n    "
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewCryptoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewCryptoComponent = (function () {
    function ViewCryptoComponent(_service, _http) {
        this._service = _service;
        this._http = _http;
        this.cryptos = [];
    }
    ViewCryptoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.observableCryptos = this._service.getAllCoins();
        this.observableCryptos.subscribe(function (data) {
            var resp = JSON.stringify(data);
            //console.log(resp);
            var json = JSON.parse(resp);
            //console.log(json.Response);
            //console.log(json.Data);
            var c = Object.keys(json.Data).length;
            console.log("count =" + c);
            _this.count = c;
            var dictionary = json.Data;
            for (var key in dictionary) {
                _this.cryptos.push({ 'Id': key,
                    'CoinName': dictionary[key].CoinName,
                    'FullName': dictionary[key].FullName,
                    'TotalCoinSupply': dictionary[key].TotalCoinSupply });
            }
        });
    };
    ViewCryptoComponent.prototype.addCoin = function (id, coinname) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        alert("id = " + id + " coinname = " + coinname);
        this._http.post("http://localhost:8094/crypto/create", { coincode: id, coinname: coinname, id: 0 }, options)
            .subscribe(function (res) {
            console.log("AAA" + res);
            //this.mymessage = "Added Patient";
            //this.userForm.reset();
        }, function (err) {
            console.log("Error occured1" + err);
            var body = err.json() || '';
            var error3 = JSON.stringify(body);
            var error4 = JSON.parse(error3);
            console.log("Error occured2 =" + error3);
            console.log("Error occured4 =" + error4.status);
            var count = Object.keys(error4.errors).length;
            console.log("Error occured5 =" + count);
            //this.mymessage = "";
            error4.errors.forEach(function (element) {
                console.log(element.field);
                console.log(element.defaultMessage);
                //if (element.field == 'name') { this.namemessage = element.defaultMessage; }
                //if (element.field == 'nhsid')  { this.nhsmessage = element.defaultMessage; }			    
            });
        });
    };
    return ViewCryptoComponent;
}());
ViewCryptoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'view-cypto-details',
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]],
        template: "\n  \n  <home-header></home-header> \n  \n  <div class=\"container-fluid\">\n    <h1 class=\"col-sm-12\">View Crypto Currencies - {{count}}</h1>\n  </div>\n\n<!--\n<div class=\"container\">\n <div class=\"col-xs-9\">\n\t<select style=\"width:223px;\" class=\"form-control\" id=\"searchtype\" [(ngModel)]=\"searchtype\" >\n\t    <option value=\"\" selected>Choose...</option>\n\t    <option value=\"id\">Id</option>\n\t    <option value=\"name\">Name</option>\n\t    <option value=\"nhsid\">NHS Id</option>\n\t</select>\n </div>\n </div>\n -->\n \n <div class=\"container\">\n <div class=\"row\">\n <table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th>Favourites</th>\n      <th>#</th>\n      <th>CoinName</th>\n      <th>FullName</th>\n      <th>TotalCoinSupply</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let crypto of cryptos\">\n      <td><button class=\"btn btn-primary\" (click)=\"addCoin(crypto.Id, crypto.FullName)\">Add</button></td>\n      \n      <th scope=\"row\">{{crypto.Id}}</th>\n      <td>{{crypto.CoinName}}</td>\n      <td>{{crypto.FullName}}</td>\n      <td>{{crypto.TotalCoinSupply}}</td>\n    </tr>\n  </tbody>\n</table>\n\n</div>\n</div>\n\n \n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], ViewCryptoComponent);

var _a, _b;
//# sourceMappingURL=view-crypto.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewFavouriteCryptoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewFavouriteCryptoComponent = (function () {
    function ViewFavouriteCryptoComponent(_service, _http) {
        this._service = _service;
        this._http = _http;
        this.cryptos = [];
    }
    ViewFavouriteCryptoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.observableCryptos = this._service.getFavCryptosWithObservable();
        this.observableCryptos.subscribe(function (cryptos) { return _this.cryptos = cryptos; });
    };
    return ViewFavouriteCryptoComponent;
}());
ViewFavouriteCryptoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'view-favourite-cypto-details',
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]],
        template: "\n  \n  <home-header></home-header> \n  \n  <div class=\"container-fluid\">\n    <h1 class=\"col-sm-12\">Favourite Crypto Currencies - {{count}}</h1>\n  </div>\n\n<!--\n<div class=\"container\">\n <div class=\"col-xs-9\">\n\t<select style=\"width:223px;\" class=\"form-control\" id=\"searchtype\" [(ngModel)]=\"searchtype\" >\n\t    <option value=\"\" selected>Choose...</option>\n\t    <option value=\"id\">Id</option>\n\t    <option value=\"name\">Name</option>\n\t    <option value=\"nhsid\">NHS Id</option>\n\t</select>\n </div>\n </div>\n -->\n \n <div class=\"container\">\n <div class=\"row\">\n <table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th>Favourites</th>\n      <th>#</th>\n      <th>CoinName</th>\n      <th>FullName</th>\n      <th>TotalCoinSupply</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let crypto of cryptos\">\n      <td><button class=\"btn btn-primary\" (click)=\"addCoin(crypto.Id, crypto.FullName)\">Add</button></td>\n      \n      <th scope=\"row\">{{crypto.Id}}</th>\n      <td>{{crypto.CoinName}}</td>\n      <td>{{crypto.FullName}}</td>\n      <td>{{crypto.TotalCoinSupply}}</td>\n    </tr>\n  </tbody>\n</table>\n\n</div>\n</div>\n\n\n \n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], ViewFavouriteCryptoComponent);

var _a, _b;
//# sourceMappingURL=view-favourite-crypto.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
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
    }
    ViewPatientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.observablePatients = this._service.getAllPatientWithObservable();
        this.observablePatients.subscribe(function (patients) { return _this.patients = patients; });
    };
    return ViewPatientsComponent;
}());
ViewPatientsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'view-patients-details',
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]],
        template: "\n  \n  <home-header></home-header> \n  \n  <div class=\"container-fluid\">\n    <h1 class=\"col-sm-12\">All Patients</h1>\n  </div>\n\n <div class=\"container\">\n <div class=\"row\">\n <table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Name</th>\n      <th>NHS ID</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let patient of patients\">\n      <th scope=\"row\">{{patient.id}}</th>\n      <td>{{patient.name}}</td>\n      <td>{{patient.nhsid}}</td>\n    </tr>\n  </tbody>\n</table>\n\n</div>\n</div>\n \n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], ViewPatientsComponent);

var _a, _b;
//# sourceMappingURL=view-patients.component.js.map

/***/ }),

/***/ 105:
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

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(160)(false);
// imports


// module
exports.push([module.i, "html,body {\n\theight: 100%;\n}\n\nbody.my-login-page {\n\tbackground-color: #f7f9fb;\n\tfont-size: 14px;\n}\n\n.my-login-page .brand {\n\twidth: 90px;\n\theight: 90px;\n\toverflow: hidden;\n\tborder-radius: 50%;\n\tmargin: 0 auto;\n\tmargin: 40px auto;\n\tbox-shadow: 0 0 40px rgba(0,0,0,.05);\n}\n\n.my-login-page .brand img {\n\twidth: 100%;\n}\n\n.my-login-page .card-wrapper {\n\twidth: 400px;\n\tmargin: 0 auto;\n}\n\n.my-login-page .card {\n\tborder-color: transparent;\n\tbox-shadow: 0 0 40px rgba(0,0,0,.05);\n}\n\n.my-login-page .card.fat {\n\tpadding: 10px;\n}\n\n.my-login-page .card .card-title {\n\tmargin-bottom: 30px;\n}\n\n.my-login-page .form-control {\n\tborder-width: 2.3px;\n}\n\n.my-login-page .form-group label {\n\twidth: 100%;\n}\n\n.my-login-page .btn.btn-block {\n\tpadding: 12px 10px;\n}\n\n.my-login-page .margin-top20 {\n\tmargin-top: 20px;\n}\n\n.my-login-page .no-margin {\n\tmargin: 0;\n}\n\n.my-login-page .footer {\n\tmargin: 40px 0;\n\tcolor: #888;\n\ttext-align: center;\n}\n\n@media screen and (max-width: 425px) {\n\t.my-login-page .card-wrapper {\n\t\twidth: 90%;\n\t\tmargin: 0 auto;\n\t}\n}\n\n@media screen and (max-width: 320px) {\n\t.my-login-page .card.fat {\n\t\tpadding: 0;\n\t}\n\n\t.my-login-page .card.fat .card-body {\n\t\tpadding: 15px;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Foo; });
/* unused harmony export Crypto */
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

var Crypto = (function () {
    function Crypto(Id, CoinName, FullName, TotalCoinSupply) {
        this.Id = Id;
        this.CoinName = CoinName;
        this.FullName = FullName;
        this.TotalCoinSupply = TotalCoinSupply;
    }
    return Crypto;
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
    AppService.prototype.getPatientWithObservableById = function (id) {
        return this._http.get('http://51.141.9.85:5555/api/my-patient-microservice/demo/getpatientbyid?id=' + id)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    AppService.prototype.getPatientWithObservableByName = function (name) {
        return this._http.get('http://51.141.9.85:5555/api/my-patient-microservice/demo/getpatientbyname?name=' + name)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    AppService.prototype.getPatientWithObservableByNhsid = function (nhsid) {
        return this._http.get('http://51.141.9.85:5555/api/my-patient-microservice/demo/getpatientbynhsid?nhsid=' + nhsid)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
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
    AppService.prototype.getAllCoins = function () {
        return this._http.get("http://51.141.9.85:5555/api/my-crypto-microservice/crypto/list")
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    AppService.prototype.getFavCryptosWithObservable = function () {
        return this._http.get("http://localhost:8094/crypto/myfav")
            .map(this.extractData)
            .catch(this.handleErrorObservable);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(105);




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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(61);
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
        this.userForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            Firstname: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required),
            Lastname: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required),
            NHSid: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required)
        });
    };
    AddPatientComponent.prototype.onSubmit = function () {
        console.log("onsubmit");
        this.namemessage = "";
        this.nhsmessage = "";
        if (this.userForm.valid) {
            console.log("valid");
            var patient = new __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* Patient */](0, this.userForm.controls['Firstname'].value + " " + this.userForm.controls['Lastname'].value, this.userForm.controls['NHSid'].value);
            this.addPatientWithPromise(patient);
            // this.userForm.reset();
            // this.router.navigate(['/user']);
        }
        else {
            console.log("invalid");
            this.mymessage = "All values are mandatory.";
        }
    };
    AddPatientComponent.prototype.addPatientWithPromise = function (patient) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this._http.post("http://51.141.9.85:5555/api/my-patient-microservice/demo/createpatient", patient, options)
            .subscribe(function (res) {
            console.log("AAA" + res);
            _this.mymessage = "Added Patient";
            _this.userForm.reset();
        }, function (err) {
            console.log("Error occured1" + err);
            var body = err.json() || '';
            var error3 = JSON.stringify(body);
            var error4 = JSON.parse(error3);
            console.log("Error occured2 =" + error3);
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
            });
        });
    };
    return AddPatientComponent;
}());
AddPatientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'add-patient',
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]],
        template: "\n  \n   <home-header></home-header> \n  \n  <div class=\"container-fluid\">\n    <h1 class=\"col-sm-12\">Add a Patient</h1>\n</div>\n\n\n <div class=\"container\">\n <div class=\"row\">\n  <form novalidate [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-row\">\n    <div class=\"col-md-4 mb-3\">\n      <label for=\"validationServer01\">First name</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationServer01\" formControlName=\"Firstname\" placeholder=\"First name\" required>\n      <div  style=\"color:red; font-size: 11px;\">\n          {{ namemessage }}\n      </div>\n    </div>\n    <div class=\"col-md-4 mb-3\">\n      <label for=\"validationServer02\">Last name</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationServer02\" formControlName=\"Lastname\" placeholder=\"Last name\" required>\n    </div>\n    <div class=\"col-md-4 mb-3\">\n      <label for=\"validationServer03\">NHS id</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationServer03\" formControlName=\"NHSid\" placeholder=\"NHS id\" required>\n\t  <div  style=\"color:red; font-size: 11px;\">\n          {{ nhsmessage }}\n        </div>\n\n    </div>\n  </div>\n    \n  <button class=\"btn btn-primary\" type=\"submit\">Add</button>\n  </form>\n    \n  </div>\n  <br>\n  <div class=\"container\">\n  <label>{{ mymessage }}</label>\n  </div>\n  \n </div>\n \n \n <script>\n// Example starter JavaScript for disabling form submissions if there are invalid fields\n(function() {\n  'use strict';\n\n  window.addEventListener('load', function() {\n    var form = document.getElementById('needs-validation');\n    form.addEventListener('submit', function(event) {\n      if (form.checkValidity() === false) {\n        event.preventDefault();\n        event.stopPropagation();\n      }\n      form.classList.add('was-validated');\n    }, false);\n  }, false);\n})();\n</script>\n  "
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_description_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__foo_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__view_patients_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_patient_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__find_patient_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__view_crypto_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__view_favourite_crypto_component__ = __webpack_require__(103);
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
            __WEBPACK_IMPORTED_MODULE_10__view_patients_component__["a" /* ViewPatientsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__add_patient_component__["a" /* AddPatientComponent */],
            __WEBPACK_IMPORTED_MODULE_12__find_patient_component__["a" /* FindPatientComponent */],
            __WEBPACK_IMPORTED_MODULE_13__view_crypto_component__["a" /* ViewCryptoComponent */],
            __WEBPACK_IMPORTED_MODULE_14__view_favourite_crypto_component__["a" /* ViewFavouriteCryptoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_8__home_description_component__["a" /* HomeDescriptionComponent */] },
                { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_component__["a" /* LoginComponent */] },
                { path: 'viewpatients', component: __WEBPACK_IMPORTED_MODULE_10__view_patients_component__["a" /* ViewPatientsComponent */] },
                { path: 'addpatient', component: __WEBPACK_IMPORTED_MODULE_11__add_patient_component__["a" /* AddPatientComponent */] },
                { path: 'findpatient', component: __WEBPACK_IMPORTED_MODULE_12__find_patient_component__["a" /* FindPatientComponent */] },
                { path: 'viewcrypto', component: __WEBPACK_IMPORTED_MODULE_13__view_crypto_component__["a" /* ViewCryptoComponent */] },
                { path: 'viewfavouritecrypto', component: __WEBPACK_IMPORTED_MODULE_14__view_favourite_crypto_component__["a" /* ViewFavouriteCryptoComponent */] },
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
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
        this.searchtype = "name";
    };
    FindPatientComponent.prototype.getPatient = function () {
        //this.mymessage = 'searchtext = ' + this.searchtext + ' searchtype = ' + this.searchtype;
        var _this = this;
        this.mymessage = '';
        this.patients = [];
        if (this.searchtype == undefined || this.searchtype == "0") {
            this.mymessage = "Please select a value from dropdown";
        }
        if (this.searchtext == undefined || this.searchtext == "") {
            this.mymessage = "Please enter some text to search";
        }
        if ((this.searchtext != undefined && this.searchtext != "") &&
            (this.searchtype != undefined && this.searchtype != "")) {
            if (this.searchtype == "id") {
                this.observablePatients = this._service.getPatientWithObservableById(this.searchtext);
            }
            if (this.searchtype == "name") {
                this.observablePatients = this._service.getPatientWithObservableByName(this.searchtext);
            }
            if (this.searchtype == "nhsid") {
                this.observablePatients = this._service.getPatientWithObservableByNhsid(this.searchtext);
            }
            this.observablePatients.subscribe(function (patients) { return _this.patients = patients; });
        }
    };
    FindPatientComponent.prototype.deletePatient = function (p, i) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this._http.delete("http://51.141.9.85:5555/api/my-patient-microservice/demo/deletepatient/?id=" + p.id, options)
            .subscribe(function (res) {
            console.log("AAA" + res);
            //document.getElementById('msg-saved-'+patient.id).innerHTML = "Saved";
            _this.patients.splice(i, 1);
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
            //this.mymessage = "";
            error4.errors.forEach(function (element) {
                console.log(element.field);
                console.log(element.defaultMessage);
                //if (element.field == 'name') { document.getElementById('msg-name-'+patient.id).innerHTML = element.defaultMessage; }
                //if (element.field == 'nhsid')  { document.getElementById('msg-nhsid-'+patient.id).innerHTML = element.defaultMessage; }
                //this.mymessage = this.mymessage + element.defaultMessage + " ";
            });
        });
    };
    FindPatientComponent.prototype.editPatient = function (p, i) {
        //alert(i + ": " + p.id + " " + p.name + " " + p.nhsid  );
        document.getElementById('msg-name-' + p.id).innerHTML = "";
        document.getElementById('msg-nhsid-' + p.id).innerHTML = "";
        document.getElementById('msg-saved-' + p.id).innerHTML = "";
        document.getElementById('msg-deleted-' + p.id).innerHTML = "";
        this.updatePatientWithPromise(p, i);
    };
    FindPatientComponent.prototype.updatePatientWithPromise = function (patient, i) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this._http.put("http://51.141.9.85:5555/api/my-patient-microservice/demo/updatepatient", patient, options)
            .subscribe(function (res) {
            console.log("AAA" + res);
            document.getElementById('msg-saved-' + patient.id).innerHTML = "Saved";
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
                    document.getElementById('msg-name-' + patient.id).innerHTML = element.defaultMessage;
                }
                if (element.field == 'nhsid') {
                    document.getElementById('msg-nhsid-' + patient.id).innerHTML = element.defaultMessage;
                }
                //this.mymessage = this.mymessage + element.defaultMessage + " ";
            });
        });
    };
    return FindPatientComponent;
}());
FindPatientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'find-patient',
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]],
        template: "\n  \n   <home-header></home-header> \n  \n  <div class=\"container-fluid\">\n    <h1 class=\"col-sm-12\">Find/Edit/Delete Patients</h1>\n  </div>\n\n  <div class=\"container\">\t\n\t\t<div class=\"form-group row\">\n\t\t\t\t<div class=\"col-xs-9\">\n\t\t\t\t    <input class=\"form-control\" type=\"text\" id=\"search\" [(ngModel)]=\"searchtext\" placeholder=\"Search\">\t\t\t\t\t\n\t\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group row\">\n\t\t\t\t<div class=\"col-xs-9\">\n\t\t\t\t\t<select style=\"width:223px;\" class=\"form-control\" id=\"searchtype\" [(ngModel)]=\"searchtype\" >\n\t\t\t\t\t    <option value=\"\" selected>Choose...</option>\n\t\t\t\t\t    <option value=\"id\">Id</option>\n\t\t\t\t\t    <option value=\"name\">Name</option>\n\t\t\t\t\t    <option value=\"nhsid\">NHS Id</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group row\">\n\t\t\t<div class=\"offset-xs-3 col-xs-9\">\n\t\t\t\t<button class=\"btn btn-primary\" (click)=\"getPatient()\">Search</button>\n\t\t\t</div>\n\t\t</div>\t\n  </div>\n \n  <br>\n  <div class=\"container\">\n  <label>{{ mymessage }}</label>\n  </div>\n   \n  <div *ngIf=\"patients?.length\" class=\"container\">\n  <div class=\"row\">\n  <table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Name</th>\n      <th>NHS ID</th>\n      <th>Save</th>\n      <th>Delete</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let patient of patients; let i = index\">\n      <th scope=\"row\">{{patient.id}}</th>\n        \n      <td> \n      \t<input name=\"name-{{patient.id}}\" [(ngModel)]=\"patient.name\">     \n      \t<div id=\"msg-name-{{patient.id}}\" style=\"color:red; font-size: 11px;\"></div>\n      </td>\n      \n      <td> \n      \t<input name=\"nhsid-{{patient.id}}\" [(ngModel)]=\"patient.nhsid\"> \n      \t<div id=\"msg-nhsid-{{patient.id}}\" style=\"color:red; font-size: 11px;\"></div>\n     </td>\n      \n     <!-- <td>{{patient.name}}</td> \n      <td>{{patient.nhsid}}</td> -->\n      <td><button class=\"btn btn-primary\" (click)=\"editPatient(patient, i)\">Save</button> <div id=\"msg-saved-{{patient.id}}\" style=\"color:red; font-size: 11px;\"></div> </td>\n      <td><button class=\"btn btn-primary\" (click)=\"deletePatient(patient, i)\">Delete</button>  <div id=\"msg-deleted-{{patient.id}}\" style=\"color:red; font-size: 11px;\"></div> </td>\n    </tr>\n  </tbody>\n</table>\n\n </div>\n </div>\n  "
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(8);
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
        template: " \n  \n  <home-header></home-header>\n  <br>\n  <div class=\"container\">\n    This is a simple Oauth2, Angular4, Docker, Jenkins, Spring Microservices example.\n    <br>\n    <br>\n    You can click on Actions; View Patients (GET), Add a Patient (POST), Find/Edit/Delete a Patient (GET/PUT/DELETE)\n    <br>\n    <br>\n    A description of the Rest api can be found in the Swagger link.\n    <br>\n    <br>\n    The Spring discovery service Eurareka is : <a href=\"http://51.141.9.85:8761\" target=\"_blank\">http://51.141.9.85:8761</a>\n    <br>\n    <br>\n    Jenkins pipe line : <a href=\"http://52.191.209.219/jenkins/\" target=\"_blank\">http://52.191.209.219/jenkins/</a>\n    <br>\n    <br>\n    Github repos :\n    <br>\n    <a href=\"https://github.com/shajidissa/my-angular-app\" target=\"_blank\">my-angular-app</a>\n    <br>\n    <a href=\"https://github.com/shajidissa/my-patient-microservice\" target=\"_blank\">my-patient-microservice</a>\n    <br>\n    <a href=\"https://github.com/shajidissa/my-eureka-server\" target=\"_blank\">my-eureka-server</a>\n    <br>\n    <a href=\"https://github.com/shajidissa/my-zuul-server\" target=\"_blank\">my-zuul-server</a>\n    <br>\n    <a href=\"https://github.com/shajidissa/my-authenticating-service\" target=\"_blank\">my-authenticating-service</a>\n    <br>\n    <a href=\"https://github.com/shajidissa/my-configuration-server\" target=\"_blank\">my-configuration-server</a>\n    <br>\n    <a href=\"https://github.com/shajidissa/config-repo\" target=\"_blank\">config-repo</a>\n    \n  </div>\n\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object])
], HomeDescriptionComponent);

var _a;
//# sourceMappingURL=home-description.component.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.bundle.js.map