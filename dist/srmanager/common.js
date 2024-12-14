(self["webpackChunksr_manager"] = self["webpackChunksr_manager"] || []).push([["common"],{

/***/ 66237:
/*!*********************************************************************************!*\
  !*** ./src/app/main/extensions/toastr/custom-toastr/custom-toastr.animation.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toastrSlideY": function() { return /* binding */ toastrSlideY; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 17238);

var toastrSlideY = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('flyInOut', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('inactive', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: 0
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('inactive => active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('400ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            transform: 'translateX(100%)',
            opacity: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            transform: 'translateX(0%)',
            opacity: 1
        })
    ]))),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('active => removed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('400ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            transform: 'translateX(0%)',
            opacity: 1
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            transform: 'translateX(100%)',
            opacity: 0
        })
    ])))
]);


/***/ }),

/***/ 28339:
/*!*********************************************************************************!*\
  !*** ./src/app/main/extensions/toastr/custom-toastr/custom-toastr.component.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomToastrComponent": function() { return /* binding */ CustomToastrComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _custom_toastr_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-toastr.animation */ 66237);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);





function CustomToastrComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.options.titleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function CustomToastrComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 8);
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r1.options.messageClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r1.message, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function CustomToastrComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r2.options.messageClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r2.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.message, " ");
} }
function CustomToastrComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomToastrComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomToastrComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r4.width + "%");
} }
var CustomToastrComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(CustomToastrComponent, _super);
    function CustomToastrComponent(toastrService, toastPackage) {
        var _this = _super.call(this, toastrService, toastPackage) || this;
        _this.toastrService = toastrService;
        _this.toastPackage = toastPackage;
        return _this;
    }
    CustomToastrComponent.ɵfac = function CustomToastrComponent_Factory(t) { return new (t || CustomToastrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastPackage)); };
    CustomToastrComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomToastrComponent, selectors: [["app-custom-toastr"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 7, consts: [[1, "row"], [1, "col-9"], [3, "class", 4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "class", 4, "ngIf"], [1, "col-3", "text-right"], ["aria-label", "Close", "class", "toast-close-button", 3, "click", 4, "ngIf"], [4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "innerHTML"], ["role", "alert", "aria-live", "polite"], ["aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], [1, "toast-progress"]], template: function CustomToastrComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CustomToastrComponent_div_2_Template, 2, 4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CustomToastrComponent_div_3_Template, 1, 3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CustomToastrComponent_div_4_Template, 2, 4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CustomToastrComponent_button_6_Template, 3, 0, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CustomToastrComponent_div_7_Template, 2, 2, "div", 7);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.state.value === "inactive" ? "none" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message && ctx.options.enableHtml);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message && !ctx.options.enableHtml);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.options.closeButton);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.options.progressBar);
        } }, encapsulation: 2, data: { animation: [_custom_toastr_animation__WEBPACK_IMPORTED_MODULE_0__.toastrSlideY] } });
    return CustomToastrComponent;
}(ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.Toast));



/***/ }),

/***/ 98460:
/*!**************************************************************************************!*\
  !*** ./src/app/main/projets/logistique/VehiculeMouvement/affaire/affaire.service.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AffaireService": function() { return /* binding */ AffaireService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var app_main_projets_sr_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/main/projets/sr-manager.service */ 14471);




var AffaireService = /** @class */ (function () {
    function AffaireService(srManagerService) {
        this.srManagerService = srManagerService;
        this.apiURL = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.affaireapi;
        // @ts-ignore
        this.onAffairesListChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject();
    }
    /*getAffaires(): Observable<Affaire[]> {
      // @ts-ignore
        return this.srManagerService.getResources(`${this.apiURL}/getAllAffaire`);
    }*/
    AffaireService.prototype.getAffaireById = function (id) {
        // @ts-ignore
        return this.srManagerService.getResource(this.apiURL + "/getAffaireById/" + id);
    };
    AffaireService.prototype.deleteAffaire = function (id) {
        // @ts-ignore
        return this.srManagerService.deleteRessource(this.apiURL + "/deleteAffaire/" + id);
    };
    /* saveAffaireFromApi(): Observable<Affaire[]> {
       return this.http.get<Affaire[]>(`${this.apiURL}/save-affaire-from-api`).subscribe();
     }*/
    AffaireService.prototype.saveAffaireFromApi = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.apiURL + "/saveAffaireFromApi";
            _this.srManagerService.getResources(url).subscribe(function (response) {
                _this.onAffairesListChanged.next(response);
                resolve(response);
            }, reject);
        });
    };
    AffaireService.prototype.getAffaires = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.apiURL + "/affaires";
            _this.srManagerService.getResource(url).subscribe(function (response) {
                _this.onAffairesListChanged.next(response);
                resolve(response);
            }, reject);
        });
    };
    AffaireService.prototype.getAllAffaire = function () {
        var _this = this;
        // @ts-ignore
        return new Promise(function (resolve, reject) {
            var url = _this.apiURL + "/getAllAffaire";
            _this.srManagerService.getResources(url).subscribe(function (response) {
                _this.onAffairesListChanged.next(response);
                resolve(response);
            }, reject);
        });
    };
    AffaireService.ɵfac = function AffaireService_Factory(t) { return new (t || AffaireService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_main_projets_sr_manager_service__WEBPACK_IMPORTED_MODULE_1__.SrManagerService)); };
    AffaireService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AffaireService, factory: AffaireService.ɵfac, providedIn: "root" });
    return AffaireService;
}());



/***/ }),

/***/ 67269:
/*!**********************************************************************************************!*\
  !*** ./src/app/main/projets/logistique/VehiculeMouvement/fournisseur/fournisseur.service.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FournisseurService": function() { return /* binding */ FournisseurService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var app_main_projets_sr_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/main/projets/sr-manager.service */ 14471);




var FournisseurService = /** @class */ (function () {
    function FournisseurService(srManagerService) {
        this.srManagerService = srManagerService;
        this.apiURL = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.fournisseurapi;
        this.onFournisseurListChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
    FournisseurService.prototype.getAllFournisseurs = function () {
        var _this = this;
        var url = this.apiURL + "/AllFournisseurs";
        return new Promise(function (resolve, reject) {
            _this.srManagerService.getResources(url).subscribe(function (data) {
                _this.onFournisseurListChanged.next(data);
                resolve(data);
            }, reject);
        });
    };
    /* saveFournisseurFromApi(): Observable<string> {
       return this.http.get<string>(`${this.apiURL}/save-fournisseur-from-api`);
     }*/
    FournisseurService.prototype.saveFournisseurFromApi = function () {
        var _this = this;
        var url = this.apiURL + "/saveFournisseurFromApi";
        return new Promise(function (resolve, reject) {
            _this.srManagerService.getResources(url).subscribe(function (data) {
                _this.onFournisseurListChanged.next(data);
                resolve(data);
            }, reject);
        });
        //return this.http.get<string>(`${this.apiURL}/save-fournisseur-from-api`);
    };
    FournisseurService.prototype.getFournisseurById = function (id) {
        // @ts-ignore
        return this.srManagerService.getResources(this.apiURL + "/geFournisseurById/" + id);
    };
    FournisseurService.prototype.deleteFournisseur = function (id) {
        // @ts-ignore
        return this.srManagerService.deleteRessource(this.apiURL + "/deleteFournisseur/" + id);
    };
    FournisseurService.ɵfac = function FournisseurService_Factory(t) { return new (t || FournisseurService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_main_projets_sr_manager_service__WEBPACK_IMPORTED_MODULE_1__.SrManagerService)); };
    FournisseurService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: FournisseurService, factory: FournisseurService.ɵfac, providedIn: "root" });
    return FournisseurService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map