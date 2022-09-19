(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\_Projetos\cryptbank\src\main.ts */"zUnb");


/***/ }),

/***/ "5Q5W":
/*!**********************************************!*\
  !*** ./src/app/services/transfer.service.ts ***!
  \**********************************************/
/*! exports provided: TransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferService", function() { return TransferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class TransferService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'http://localhost:3000/transfers';
        this.listTransfer = [];
    }
    get transfers() {
        return this.listTransfer;
    }
    all() {
        return this.httpClient.get(this.url);
    }
    add(transfer) {
        this.hydrate(transfer);
        this.listTransfer.push(transfer);
    }
    hydrate(transfer) {
        transfer.date = new Date();
    }
}
TransferService.ɵfac = function TransferService_Factory(t) { return new (t || TransferService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TransferService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TransferService, factory: TransferService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C+k3":
/*!**********************************************!*\
  !*** ./src/app/extract/extract.component.ts ***!
  \**********************************************/
/*! exports provided: ExtractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtractComponent", function() { return ExtractComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_transfer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/transfer.service */ "5Q5W");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ExtractComponent_tbody_8_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transfer_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, transfer_r4 == null ? null : transfer_r4.date, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, transfer_r4 == null ? null : transfer_r4.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transfer_r4 == null ? null : transfer_r4.destination);
} }
function ExtractComponent_tbody_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExtractComponent_tbody_8_tr_1_Template, 9, 8, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.shifts);
} }
function ExtractComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No operations registered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ExtractComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        //this.shifts = this.service.transfers;
        this.service.all().subscribe((shifts) => {
            console.table(shifts);
            this.shifts = shifts;
        });
    }
}
ExtractComponent.ɵfac = function ExtractComponent_Factory(t) { return new (t || ExtractComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_transfer_service__WEBPACK_IMPORTED_MODULE_1__["TransferService"])); };
ExtractComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExtractComponent, selectors: [["app-extract"]], decls: 11, vars: 2, consts: [[1, "tabela"], [1, "tabela__cabecalho"], [1, "tabela__cabecalho__conteudo"], [4, "ngIf", "ngIfElse"], ["list", ""], ["class", "tabela__linha", 4, "ngFor", "ngForOf"], [1, "tabela__linha"], [1, "tabela__conteudo"]], template: function ExtractComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExtractComponent_tbody_8_Template, 2, 1, "tbody", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExtractComponent_ng_template_9_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.shifts == null ? null : ctx.shifts.length) > 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 24px;\n  margin-bottom: 16px;\n}\n\n.tabela[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 auto;\n  background-color: white;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n}\n\n.tabela__cabecalho[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n\n.tabela__cabecalho__conteudo[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-bottom: 2px solid green;\n}\n\n.tabela__linha[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-radius: 4px;\n}\n\n.tabela__linha[_ngcontent-%COMP%]:last-child   .tabela__conteudo[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.tabela__conteudo[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-bottom: 1px solid var(--cinza-claro);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGV4dHJhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtBQUNKOztBQUNJO0VBQ0UscUJBQUE7QUFDTjs7QUFDTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUNSOztBQUdJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQUROOztBQUlRO0VBQ0UsbUJBQUE7QUFGVjs7QUFPSTtFQUNFLGFBQUE7RUFDQSwyQ0FBQTtBQUxOIiwiZmlsZSI6ImV4dHJhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJlbGEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIFxyXG4gICAgJl9fY2FiZWNhbGhvIHtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gIFxyXG4gICAgICAmX19jb250ZXVkbyB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JlZW47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgICZfX2xpbmhhIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIFxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIC50YWJlbGFfX2NvbnRldWRvIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmX19jb250ZXVkbyB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jaW56YS1jbGFybyk7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_transfer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/transfer.service */ "5Q5W");
/* harmony import */ var _new_transfer_new_transfer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-transfer/new-transfer.component */ "xBWV");
/* harmony import */ var _extract_extract_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extract/extract.component */ "C+k3");




class AppComponent {
    constructor(service) {
        this.service = service;
        this.title = 'cryptbank';
    }
    transfer($event) {
        this.service.add($event);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_transfer_service__WEBPACK_IMPORTED_MODULE_1__["TransferService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[3, "whenTransfer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-new-transfer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("whenTransfer", function AppComponent_Template_app_new_transfer_whenTransfer_0_listener($event) { return ctx.transfer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-extract");
    } }, directives: [_new_transfer_new_transfer_component__WEBPACK_IMPORTED_MODULE_2__["NewTransferComponent"], _extract_extract_component__WEBPACK_IMPORTED_MODULE_3__["ExtractComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _new_transfer_new_transfer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-transfer/new-transfer.component */ "xBWV");
/* harmony import */ var _extract_extract_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extract/extract.component */ "C+k3");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");










Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7___default.a, 'pt');
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'pt' },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"],
            useValue: 'BRL'
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _new_transfer_new_transfer_component__WEBPACK_IMPORTED_MODULE_5__["NewTransferComponent"],
        _extract_extract_component__WEBPACK_IMPORTED_MODULE_6__["ExtractComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]] }); })();


/***/ }),

/***/ "xBWV":
/*!********************************************************!*\
  !*** ./src/app/new-transfer/new-transfer.component.ts ***!
  \********************************************************/
/*! exports provided: NewTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTransferComponent", function() { return NewTransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class NewTransferComponent {
    constructor() {
        this.whenTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.valueWithError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    transfer() {
        console.log('Requested new transfer');
        if (this.Valid()) {
            const valueEmit = { value: this.value, destination: this.destination };
            this.whenTransfer.emit(valueEmit);
            this.clearFields();
        }
    }
    clearFields() {
        this.value = 0;
        this.destination = 0;
    }
    Valid() {
        const valid = this.value > 0;
        if (!valid) {
            this.valueWithError.emit('Please enter a valid value');
        }
        return valid;
    }
}
NewTransferComponent.ɵfac = function NewTransferComponent_Factory(t) { return new (t || NewTransferComponent)(); };
NewTransferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewTransferComponent, selectors: [["app-new-transfer"]], outputs: { whenTransfer: "whenTransfer", valueWithError: "valueWithError" }, decls: 15, vars: 2, consts: [[1, "container"], [1, "formulario", 3, "ngSubmit"], [1, "formulario__titulo"], [1, "form-field"], [1, "form-field__label"], ["id", "value", "type", "number", "name", "value", 1, "form-field__input", 3, "ngModel", "ngModelChange"], ["id", "destination", "type", "text", "name", "destination", 1, "form-field__input", 3, "ngModel", "ngModelChange"], [1, "botao-wrapper"], ["type", "submit", 1, "botao"]], template: function NewTransferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewTransferComponent_Template_form_ngSubmit_1_listener() { return ctx.transfer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "lable", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewTransferComponent_Template_input_ngModelChange_7_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "lable", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewTransferComponent_Template_input_ngModelChange_11_listener($event) { return ctx.destination = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.destination);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".formulario[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 16px;\n  border-radius: 4px;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n}\n.formulario__titulo[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  color: var(--primary);\n}\n.form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: column;\n  color: var(--primary);\n}\n.form-field__label[_ngcontent-%COMP%] {\n  color: inherit;\n  margin-bottom: 4px;\n  font-size: 12px;\n}\n.form-field__input[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-radius: 4px;\n  color: inherit;\n  border: 2px solid;\n  outline: none;\n}\n.botao-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.botao[_ngcontent-%COMP%] {\n  background-color: var(--primary);\n  color: white;\n  display: block;\n  flex: 1;\n  border: none;\n  border-radius: 4px;\n  font-size: 16px;\n  padding: 0.5em;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.botao--cancelar[_ngcontent-%COMP%] {\n  background-color: var(--secondary);\n  margin-left: 20px;\n}\n.botao[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5ldy10cmFuc2Zlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7QUFDSjtBQUFJO0VBQ0UsMEJBQUE7RUFDQSxxQkFBQTtBQUVOO0FBRUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFDSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDTjtBQUVJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUFOO0FBSUU7RUFDRSxhQUFBO0FBREo7QUFJRTtFQUNFLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFESjtBQUdJO0VBQ0Usa0NBQUE7RUFDQSxpQkFBQTtBQUROO0FBSUk7RUFDRSxZQUFBO0FBRk4iLCJmaWxlIjoibmV3LXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm11bGFyaW8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAmX190aXR1bG8ge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgXHJcbiAgICAmX19sYWJlbCB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICBcclxuICAgICZfX2lucHV0IHtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJvdGFvLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLmJvdGFvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XHJcbiAgXHJcbiAgICAmLS1jYW5jZWxhciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxuICB9Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map