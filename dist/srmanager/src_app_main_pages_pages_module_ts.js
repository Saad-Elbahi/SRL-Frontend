(self["webpackChunksr_manager"] = self["webpackChunksr_manager"] || []).push([["src_app_main_pages_pages_module_ts"],{

/***/ 15162:
/*!*******************************************************************************!*\
  !*** ./src/app/main/pages/miscellaneous/coming-soon/coming-soon.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComingSoonComponent": function() { return /* binding */ ComingSoonComponent; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);






var ComingSoonComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     */
    function ComingSoonComponent(_coreConfigService) {
        this._coreConfigService = _coreConfigService;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        // Configure the layout
        this._coreConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                menu: {
                    hidden: true
                },
                customizer: false,
                enableLocalStorage: false
            }
        };
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ComingSoonComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to config changes
        this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
            _this.coreConfig = config;
        });
    };
    /**
     * On destroy
     */
    ComingSoonComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    ComingSoonComponent.ɵfac = function ComingSoonComponent_Factory(t) { return new (t || ComingSoonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.CoreConfigService)); };
    ComingSoonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ComingSoonComponent, selectors: [["app-coming-soon"]], decls: 31, vars: 1, consts: [[1, "misc-wrapper"], ["href", "javascript:void(0);", 1, "brand-logo"], ["viewBox", "0 0 139 95", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "height", "28"], ["id", "linearGradient-1", "x1", "100%", "y1", "10.5120544%", "x2", "50%", "y2", "89.4879456%"], ["stop-color", "#000000", "offset", "0%"], ["stop-color", "#FFFFFF", "offset", "100%"], ["id", "linearGradient-2", "x1", "64.0437835%", "y1", "46.3276743%", "x2", "37.373316%", "y2", "100%"], ["stop-color", "#EEEEEE", "stop-opacity", "0", "offset", "0%"], ["id", "Page-1", "stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "Artboard", "transform", "translate(-400.000000, -178.000000)"], ["id", "Group", "transform", "translate(400.000000, 178.000000)"], ["id", "Path", "d", "M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z", 1, "text-primary", 2, "fill", "currentColor"], ["id", "Path1", "d", "M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z", "fill", "url(#linearGradient-1)", "opacity", "0.2"], ["id", "Path-2", "fill", "#000000", "opacity", "0.049999997", "points", "69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"], ["id", "Path-21", "fill", "#000000", "opacity", "0.099999994", "points", "69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"], ["id", "Path-3", "fill", "url(#linearGradient-2)", "opacity", "0.099999994", "points", "101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"], [1, "brand-text", "text-primary", "ml-1"], [1, "misc-inner", "p-2", "p-sm-3"], [1, "w-100", "text-center"], [1, "mb-1"], [1, "mb-3"], ["action", "javascript:void(0);", 1, "form-inline", "justify-content-center", "row", "m-0", "mb-2"], ["id", "notify-email", "type", "text", "placeholder", "john@example.com", 1, "form-control", "col-12", "col-md-5", "mb-1", "mr-md-2"], ["type", "submit", "rippleEffect", "", 1, "btn", "btn-primary", "mb-1", "btn-sm-block"], ["alt", "Coming soon page", 1, "img-fluid", 3, "src"]], template: function ComingSoonComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "defs");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "lineargradient", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "stop", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "stop", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "lineargradient", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "stop", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "stop", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "g", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "g", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "g", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "path", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "path", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "polygon", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "polygon", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "polygon", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "h2", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Vuexy");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "h2", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "We are launching soon \uD83D\uDE80");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "We're creating something awesome. Please subscribe to get notified when it's ready!");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "form", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Notify");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "img", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.coreConfig.layout.skin === "dark" ? "assets/images/pages/coming-soon-dark.svg" : "assets/images/pages/coming-soon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_1__.RippleEffectDirective], styles: [".misc-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 750px;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 2rem;\n  left: 2rem;\n  margin: 0;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n@media (max-height: 625px) {\n  .misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n    margin-top: 4rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXHBhZ2VzXFxwYWdlLW1pc2Muc2NzcyIsImNvbWluZy1zb29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1ZGO0FEWUU7RUFDRSxrQkFBQTtFQUNBLGdCQVptQjtBQ0V2QjtBRGFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNYSjtBRGFJO0VBQ0UsZ0JBQUE7QUNYTjtBRGdCQTtFQUNFO0lBQ0UsZ0JBQUE7RUNiRjtBQUNGIiwiZmlsZSI6ImNvbWluZy1zb29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vICAgICBGaWxlIE5hbWU6IHBhZ2UtbWlzYy5zY3NzXHJcbi8vICAgICBEZXNjcmlwdGlvbjogQ29taW5nIFNvb24gcGFnZXMgY3VzdG9tIHNjc3NcclxuLy8gICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICAgIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4vLyAgICAgQXV0aG9yOiBQSVhJTlZFTlRcclxuLy8gICAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuJG1pc2MtaW5uZXItbWF4LXdpZHRoOiA3NTBweDtcclxuXHJcbi5taXNjLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1iYXNpczogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAubWlzYy1pbm5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6ICRtaXNjLWlubmVyLW1heC13aWR0aDtcclxuICB9XHJcblxyXG4gIC5icmFuZC1sb2dvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnJlbTtcclxuICAgIGxlZnQ6IDJyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgLmJyYW5kLXRleHQge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA2MjVweCkge1xyXG4gIC5taXNjLXdyYXBwZXIgLm1pc2MtaW5uZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICB9XHJcbn1cclxuIiwiLm1pc2Mtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWlzYy13cmFwcGVyIC5taXNjLWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDc1MHB4O1xufVxuLm1pc2Mtd3JhcHBlciAuYnJhbmQtbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnJlbTtcbiAgbGVmdDogMnJlbTtcbiAgbWFyZ2luOiAwO1xufVxuLm1pc2Mtd3JhcHBlciAuYnJhbmQtbG9nbyAuYnJhbmQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbkBtZWRpYSAobWF4LWhlaWdodDogNjI1cHgpIHtcbiAgLm1pc2Mtd3JhcHBlciAubWlzYy1pbm5lciB7XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgfVxufSJdfQ== */"] });
    return ComingSoonComponent;
}());



/***/ }),

/***/ 10825:
/*!*******************************************************************!*\
  !*** ./src/app/main/pages/miscellaneous/error/error.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": function() { return /* binding */ ErrorComponent; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../authentication/auth.service */ 7918);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);







var ErrorComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     */
    function ErrorComponent(_coreConfigService, authService, router) {
        this._coreConfigService = _coreConfigService;
        this.authService = authService;
        this.router = router;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        // Configure the layout
        this._coreConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                menu: {
                    hidden: true
                },
                customizer: false,
                enableLocalStorage: false
            }
        };
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to config changes
        this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
            _this.coreConfig = config;
        });
    };
    /**
     * On destroy
     */
    ErrorComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    ErrorComponent.prototype.onBackHome = function () {
        console.log("onBackHome");
        this.router.navigate(['/pages/authentication/login']);
    };
    ErrorComponent.prototype.logout = function () {
        this.authService.logout();
        //this._router.navigate(['/pages/authentication/login-v2']);
    };
    ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
    ErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 12, vars: 2, consts: [[1, "misc-wrapper"], ["href", "javascript:void(0);", 1, "brand-logo"], ["alt", "brand-logo", "height", "100", 3, "src"], [1, "misc-inner", "p-2", "p-sm-3"], [1, "w-100", "text-center"], [1, "mb-1"], [1, "mb-2"], ["rippleEffect", "", 1, "btn", "btn-primary", "mb-2", "btn-sm-block", 3, "click"], ["alt", "Error page", 1, "img-fluid", 3, "src"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h2", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Page en cours de creation \uD83D\uDE4F\uFE0F");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Oops! \uD83D\uDE16 Cette page n'est pas achevee. Revenez plus tard Merci \uD83D\uDE4F\uFE0F");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ErrorComponent_Template_a_click_9_listener() { return ctx.logout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Retour \u00E0 la page de connexion ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx.coreConfig.app.appLogoFullColors, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.coreConfig.layout.skin === "dark" ? "assets/images/pages/error-dark.svg" : "assets/images/pages/error.svg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        } }, directives: [_core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_2__.RippleEffectDirective], styles: [".misc-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 750px;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 2rem;\n  left: 2rem;\n  margin: 0;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n@media (max-height: 625px) {\n  .misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n    margin-top: 4rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXHBhZ2VzXFxwYWdlLW1pc2Muc2NzcyIsImVycm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1ZGO0FEWUU7RUFDRSxrQkFBQTtFQUNBLGdCQVptQjtBQ0V2QjtBRGFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNYSjtBRGFJO0VBQ0UsZ0JBQUE7QUNYTjtBRGdCQTtFQUNFO0lBQ0UsZ0JBQUE7RUNiRjtBQUNGIiwiZmlsZSI6ImVycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vICAgICBGaWxlIE5hbWU6IHBhZ2UtbWlzYy5zY3NzXHJcbi8vICAgICBEZXNjcmlwdGlvbjogQ29taW5nIFNvb24gcGFnZXMgY3VzdG9tIHNjc3NcclxuLy8gICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICAgIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4vLyAgICAgQXV0aG9yOiBQSVhJTlZFTlRcclxuLy8gICAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuJG1pc2MtaW5uZXItbWF4LXdpZHRoOiA3NTBweDtcclxuXHJcbi5taXNjLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1iYXNpczogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAubWlzYy1pbm5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6ICRtaXNjLWlubmVyLW1heC13aWR0aDtcclxuICB9XHJcblxyXG4gIC5icmFuZC1sb2dvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnJlbTtcclxuICAgIGxlZnQ6IDJyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgLmJyYW5kLXRleHQge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA2MjVweCkge1xyXG4gIC5taXNjLXdyYXBwZXIgLm1pc2MtaW5uZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICB9XHJcbn1cclxuIiwiLm1pc2Mtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWlzYy13cmFwcGVyIC5taXNjLWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDc1MHB4O1xufVxuLm1pc2Mtd3JhcHBlciAuYnJhbmQtbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnJlbTtcbiAgbGVmdDogMnJlbTtcbiAgbWFyZ2luOiAwO1xufVxuLm1pc2Mtd3JhcHBlciAuYnJhbmQtbG9nbyAuYnJhbmQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbkBtZWRpYSAobWF4LWhlaWdodDogNjI1cHgpIHtcbiAgLm1pc2Mtd3JhcHBlciAubWlzYy1pbm5lciB7XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgfVxufSJdfQ== */"] });
    return ErrorComponent;
}());



/***/ }),

/***/ 48057:
/*!*******************************************************************************!*\
  !*** ./src/app/main/pages/miscellaneous/maintenance/maintenance.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenanceComponent": function() { return /* binding */ MaintenanceComponent; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);






var MaintenanceComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     */
    function MaintenanceComponent(_coreConfigService) {
        this._coreConfigService = _coreConfigService;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        // Configure the layout
        this._coreConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                menu: {
                    hidden: true
                },
                customizer: false,
                enableLocalStorage: false
            }
        };
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    MaintenanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to config changes
        this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
            _this.coreConfig = config;
        });
    };
    /**
     * On destroy
     */
    MaintenanceComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    MaintenanceComponent.ɵfac = function MaintenanceComponent_Factory(t) { return new (t || MaintenanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.CoreConfigService)); };
    MaintenanceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MaintenanceComponent, selectors: [["app-maintenance"]], decls: 16, vars: 2, consts: [[1, "misc-wrapper"], ["href", "javascript:void(0);", 1, "brand-logo"], ["alt", "brand-logo", "height", "28", 3, "src"], [1, "brand-text", "text-primary", "ml-1"], [1, "misc-inner", "p-2", "p-sm-3"], [1, "w-100", "text-center"], [1, "mb-1"], [1, "mb-3"], ["action", "javascript:void(0);", 1, "form-inline", "justify-content-center", "row", "m-0", "mb-2"], ["id", "notify-email", "type", "text", "placeholder", "john@example.com", 1, "form-control", "col-12", "col-md-5", "mb-1", "mr-md-2"], ["type", "submit", "rippleEffect", "", 1, "btn", "btn-primary", "mb-1", "btn-sm-block"], ["alt", "Under maintenance page", 1, "img-fluid", 3, "src"]], template: function MaintenanceComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Vuexy");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Under Maintenance \uD83D\uDEE0");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Sorry for the inconvenience but we're performing some maintenance at the moment");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "form", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Notify");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.coreConfig.app.appLogoImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.coreConfig.layout.skin === "dark" ? "assets/images/pages/under-maintenance-dark.svg" : "assets/images/pages/under-maintenance.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_1__.RippleEffectDirective], styles: [".misc-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 750px;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 2rem;\n  left: 2rem;\n  margin: 0;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n@media (max-height: 625px) {\n  .misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n    margin-top: 4rem;\n  }\n}\n.misc-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 750px;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 2rem;\n  left: 2rem;\n  margin: 0;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n@media (max-height: 625px) {\n  .misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n    margin-top: 4rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXHBhZ2VzXFxwYWdlLW1pc2Muc2NzcyIsIm1haW50ZW5hbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1ZGO0FEWUU7RUFDRSxrQkFBQTtFQUNBLGdCQVptQjtBQ0V2QjtBRGFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNYSjtBRGFJO0VBQ0UsZ0JBQUE7QUNYTjtBRGdCQTtFQUNFO0lBQ0UsZ0JBQUE7RUNiRjtBQUNGO0FEakJBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ21CRjtBRGpCRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBWm1CO0FDK0J2QjtBRGhCRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDa0JKO0FEaEJJO0VBQ0UsZ0JBQUE7QUNrQk47QURiQTtFQUNFO0lBQ0UsZ0JBQUE7RUNnQkY7QUFDRiIsImZpbGUiOiJtYWludGVuYW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAgICAgRmlsZSBOYW1lOiBwYWdlLW1pc2Muc2Nzc1xyXG4vLyAgICAgRGVzY3JpcHRpb246IENvbWluZyBTb29uIHBhZ2VzIGN1c3RvbSBzY3NzXHJcbi8vICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAgICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcclxuLy8gICAgIEF1dGhvcjogUElYSU5WRU5UXHJcbi8vICAgICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiRtaXNjLWlubmVyLW1heC13aWR0aDogNzUwcHg7XHJcblxyXG4ubWlzYy13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLm1pc2MtaW5uZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAkbWlzYy1pbm5lci1tYXgtd2lkdGg7XHJcbiAgfVxyXG5cclxuICAuYnJhbmQtbG9nbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDJyZW07XHJcbiAgICBsZWZ0OiAycmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgIC5icmFuZC10ZXh0IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LWhlaWdodDogNjI1cHgpIHtcclxuICAubWlzYy13cmFwcGVyIC5taXNjLWlubmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgfVxyXG59XHJcbiIsIi5taXNjLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1pc2Mtd3JhcHBlciAubWlzYy1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA3NTBweDtcbn1cbi5taXNjLXdyYXBwZXIgLmJyYW5kLWxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJyZW07XG4gIGxlZnQ6IDJyZW07XG4gIG1hcmdpbjogMDtcbn1cbi5taXNjLXdyYXBwZXIgLmJyYW5kLWxvZ28gLmJyYW5kLXRleHQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDYyNXB4KSB7XG4gIC5taXNjLXdyYXBwZXIgLm1pc2MtaW5uZXIge1xuICAgIG1hcmdpbi10b3A6IDRyZW07XG4gIH1cbn1cbi5taXNjLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1pc2Mtd3JhcHBlciAubWlzYy1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA3NTBweDtcbn1cbi5taXNjLXdyYXBwZXIgLmJyYW5kLWxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJyZW07XG4gIGxlZnQ6IDJyZW07XG4gIG1hcmdpbjogMDtcbn1cbi5taXNjLXdyYXBwZXIgLmJyYW5kLWxvZ28gLmJyYW5kLXRleHQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDYyNXB4KSB7XG4gIC5taXNjLXdyYXBwZXIgLm1pc2MtaW5uZXIge1xuICAgIG1hcmdpbi10b3A6IDRyZW07XG4gIH1cbn0iXX0= */"] });
    return MaintenanceComponent;
}());



/***/ }),

/***/ 79034:
/*!******************************************************************!*\
  !*** ./src/app/main/pages/miscellaneous/miscellaneous.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiscellaneousModule": function() { return /* binding */ MiscellaneousModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var app_main_pages_miscellaneous_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/main/pages/miscellaneous/coming-soon/coming-soon.component */ 15162);
/* harmony import */ var app_main_pages_miscellaneous_error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/pages/miscellaneous/error/error.component */ 10825);
/* harmony import */ var app_main_pages_miscellaneous_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/pages/miscellaneous/maintenance/maintenance.component */ 48057);
/* harmony import */ var app_main_pages_miscellaneous_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/pages/miscellaneous/not-authorized/not-authorized.component */ 17804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);









// routing
var routes = [
    {
        path: 'miscellaneous/coming-soon',
        component: app_main_pages_miscellaneous_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_1__.ComingSoonComponent
    },
    {
        path: 'miscellaneous/not-authorized',
        component: app_main_pages_miscellaneous_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_4__.NotAuthorizedComponent
    },
    {
        path: 'miscellaneous/maintenance',
        component: app_main_pages_miscellaneous_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_3__.MaintenanceComponent
    },
    {
        path: 'miscellaneous/error',
        component: app_main_pages_miscellaneous_error_error_component__WEBPACK_IMPORTED_MODULE_2__.ErrorComponent
    }
];
var MiscellaneousModule = /** @class */ (function () {
    function MiscellaneousModule() {
    }
    MiscellaneousModule.ɵfac = function MiscellaneousModule_Factory(t) { return new (t || MiscellaneousModule)(); };
    MiscellaneousModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: MiscellaneousModule });
    MiscellaneousModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule]] });
    return MiscellaneousModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MiscellaneousModule, { declarations: [app_main_pages_miscellaneous_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_1__.ComingSoonComponent, app_main_pages_miscellaneous_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_4__.NotAuthorizedComponent, app_main_pages_miscellaneous_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_3__.MaintenanceComponent, app_main_pages_miscellaneous_error_error_component__WEBPACK_IMPORTED_MODULE_2__.ErrorComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule] }); })();


/***/ }),

/***/ 17804:
/*!*************************************************************************************!*\
  !*** ./src/app/main/pages/miscellaneous/not-authorized/not-authorized.component.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotAuthorizedComponent": function() { return /* binding */ NotAuthorizedComponent; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../authentication/auth.service */ 7918);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);






var NotAuthorizedComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     */
    function NotAuthorizedComponent(_coreConfigService, authService) {
        this._coreConfigService = _coreConfigService;
        this.authService = authService;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        // Configure the layout
        this._coreConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                menu: {
                    hidden: true
                },
                customizer: false,
                enableLocalStorage: false
            }
        };
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    NotAuthorizedComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to config changes
        this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
            _this.coreConfig = config;
        });
    };
    /**
     * On destroy
     */
    NotAuthorizedComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    NotAuthorizedComponent.prototype.logout = function () {
        this.authService.logout();
        //this._router.navigate(['/pages/authentication/login-v2']);
    };
    NotAuthorizedComponent.ɵfac = function NotAuthorizedComponent_Factory(t) { return new (t || NotAuthorizedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
    NotAuthorizedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: NotAuthorizedComponent, selectors: [["app-not-authorized"]], decls: 15, vars: 2, consts: [[1, "misc-wrapper"], ["href", "javascript:void(0);", 1, "brand-logo"], ["alt", "brand-logo", "height", "100", 3, "src"], [1, "misc-inner", "p-2", "p-sm-3"], [1, "w-100", "text-center"], [1, "mb-1", "text-danger", "text-bold"], [1, "mb-2"], [1, "divider", "divider-danger"], [1, "divider-text", "mb-2"], ["rippleEffect", "", 1, "btn", "btn-primary", "mb-1", "btn-sm-block", 3, "click"], ["alt", "Not authorized page", 1, "img-fluid", 3, "src"]], template: function NotAuthorizedComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Votre session est expir\u00E9e! \uD83D\uDD10\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h4", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Sr Manager utilise un syst\u00E8me de restriction d'acc\u00E8s a certaines ressource. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Veuillez vous reconnecter \u00E0 votre compte ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NotAuthorizedComponent_Template_a_click_12_listener() { return ctx.logout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Retour \u00E0 la page de connexion ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "img", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx.coreConfig.app.appLogoFullColors, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.coreConfig.layout.skin === "dark" ? "assets/images/logo/appIconeColorBlack.png" : "assets/images/logo/appIconeFullColors.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        } }, directives: [_core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_2__.RippleEffectDirective], styles: [".misc-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 750px;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 2rem;\n  left: 2rem;\n  margin: 0;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n@media (max-height: 625px) {\n  .misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n    margin-top: 4rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXHBhZ2VzXFxwYWdlLW1pc2Muc2NzcyIsIm5vdC1hdXRob3JpemVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1ZGO0FEWUU7RUFDRSxrQkFBQTtFQUNBLGdCQVptQjtBQ0V2QjtBRGFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNYSjtBRGFJO0VBQ0UsZ0JBQUE7QUNYTjtBRGdCQTtFQUNFO0lBQ0UsZ0JBQUE7RUNiRjtBQUNGIiwiZmlsZSI6Im5vdC1hdXRob3JpemVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vICAgICBGaWxlIE5hbWU6IHBhZ2UtbWlzYy5zY3NzXHJcbi8vICAgICBEZXNjcmlwdGlvbjogQ29taW5nIFNvb24gcGFnZXMgY3VzdG9tIHNjc3NcclxuLy8gICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICAgIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4vLyAgICAgQXV0aG9yOiBQSVhJTlZFTlRcclxuLy8gICAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuJG1pc2MtaW5uZXItbWF4LXdpZHRoOiA3NTBweDtcclxuXHJcbi5taXNjLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1iYXNpczogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAubWlzYy1pbm5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6ICRtaXNjLWlubmVyLW1heC13aWR0aDtcclxuICB9XHJcblxyXG4gIC5icmFuZC1sb2dvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnJlbTtcclxuICAgIGxlZnQ6IDJyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgLmJyYW5kLXRleHQge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA2MjVweCkge1xyXG4gIC5taXNjLXdyYXBwZXIgLm1pc2MtaW5uZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICB9XHJcbn1cclxuIiwiLm1pc2Mtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWlzYy13cmFwcGVyIC5taXNjLWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDc1MHB4O1xufVxuLm1pc2Mtd3JhcHBlciAuYnJhbmQtbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnJlbTtcbiAgbGVmdDogMnJlbTtcbiAgbWFyZ2luOiAwO1xufVxuLm1pc2Mtd3JhcHBlciAuYnJhbmQtbG9nbyAuYnJhbmQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbkBtZWRpYSAobWF4LWhlaWdodDogNjI1cHgpIHtcbiAgLm1pc2Mtd3JhcHBlciAubWlzYy1pbm5lciB7XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgfVxufSJdfQ== */"] });
    return NotAuthorizedComponent;
}());



/***/ }),

/***/ 37478:
/*!********************************************!*\
  !*** ./src/app/main/pages/pages.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": function() { return /* binding */ PagesModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/layout/components/content-header/content-header.module */ 50619);
/* harmony import */ var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-flatpickr */ 15386);
/* harmony import */ var _miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miscellaneous/miscellaneous.module */ 79034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);









var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
    PagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PagesModule });
    PagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule,
                app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_1__.ContentHeaderModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
                _miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_2__.MiscellaneousModule,
                ng2_flatpickr__WEBPACK_IMPORTED_MODULE_8__.Ng2FlatpickrModule
            ]] });
    return PagesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PagesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule,
        app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_1__.ContentHeaderModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_2__.MiscellaneousModule,
        ng2_flatpickr__WEBPACK_IMPORTED_MODULE_8__.Ng2FlatpickrModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_main_pages_pages_module_ts.js.map