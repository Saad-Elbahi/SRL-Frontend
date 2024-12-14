(self["webpackChunksr_manager"] = self["webpackChunksr_manager"] || []).push([["src_app_main_dashboard_dashboard_module_ts"],{

/***/ 91295:
/*!*******************************************************************************!*\
  !*** ./src/app/main/dashboard/dashboard-layout/dashboard-layout.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardLayoutComponent": function() { return /* binding */ DashboardLayoutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../authentication/auth.service */ 7918);
/* harmony import */ var _projets_logistique_VehiculeMouvement_mouvement_vh_dashboard_mouvement_dashboard_mouvement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projets/logistique/VehiculeMouvement/mouvement-vh/dashboard-mouvement/dashboard-mouvement.component */ 53026);



var DashboardLayoutComponent = /** @class */ (function () {
    function DashboardLayoutComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.currentUserSubscription = this.authService.currentUserSubject.subscribe(function (data) {
            _this.currentUser = data;
        });
        authService.loadCurrentUser();
    }
    DashboardLayoutComponent.prototype.ngOnInit = function () {
    };
    DashboardLayoutComponent.ɵfac = function DashboardLayoutComponent_Factory(t) { return new (t || DashboardLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
    DashboardLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DashboardLayoutComponent, selectors: [["app-dashboard-layout"]], decls: 1, vars: 0, template: function DashboardLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-dashboard-mouvement");
        } }, directives: [_projets_logistique_VehiculeMouvement_mouvement_vh_dashboard_mouvement_dashboard_mouvement_component__WEBPACK_IMPORTED_MODULE_1__.DashboardMouvementComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return DashboardLayoutComponent;
}());



/***/ }),

/***/ 95929:
/*!****************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": function() { return /* binding */ DashboardModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _authentication_auth_guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authentication/auth.guards */ 58260);
/* harmony import */ var _dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-layout/dashboard-layout.component */ 91295);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var _projets_logistique_VehiculeMouvement_mouvement_vh_mouvement_vh_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projets/logistique/VehiculeMouvement/mouvement-vh/mouvement-vh.module */ 12402);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-apexcharts */ 34256);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.service */ 143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);













var routes = [
    {
        path: 'layout',
        component: _dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_1__.DashboardLayoutComponent,
        canActivate: [_authentication_auth_guards__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    },
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
    DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DashboardModule });
    DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_dashboard_service__WEBPACK_IMPORTED_MODULE_4__.DashboardService], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarModule,
                _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule,
                ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.NgApexchartsModule,
                _projets_logistique_VehiculeMouvement_mouvement_vh_mouvement_vh_module__WEBPACK_IMPORTED_MODULE_3__.MouvementVhModule
            ]] });
    return DashboardModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_1__.DashboardLayoutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarModule,
        _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.NgApexchartsModule,
        _projets_logistique_VehiculeMouvement_mouvement_vh_mouvement_vh_module__WEBPACK_IMPORTED_MODULE_3__.MouvementVhModule] }); })();


/***/ }),

/***/ 143:
/*!*****************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardService": function() { return /* binding */ DashboardService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);



var DashboardService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function DashboardService(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onApiDataChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    DashboardService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([_this.getApiData()]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get Api Data
     */
    DashboardService.prototype.getApiData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/dashboard-data').subscribe(function (response) {
                _this.apiData = response;
                _this.onApiDataChanged.next(_this.apiData);
                resolve(_this.apiData);
            }, reject);
        });
    };
    DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
    DashboardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac });
    return DashboardService;
}());



/***/ })

}]);
//# sourceMappingURL=src_app_main_dashboard_dashboard_module_ts.js.map