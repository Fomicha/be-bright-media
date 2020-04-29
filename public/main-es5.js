(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./be-bright-web/app/app.component.scss":
  /*!**********************************************!*\
    !*** ./be-bright-web/app/app.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function beBrightWebAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZS1icmlnaHQtd2ViL2FwcC9hcHAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./be-bright-web/app/app.component.ts":
  /*!********************************************!*\
    !*** ./be-bright-web/app/app.component.ts ***!
    \********************************************/

  /*! exports provided: AppComponent */

  /***/
  function beBrightWebAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {};
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'bb-root',
      template: '<router-outlet></router-outlet>',
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./be-bright-web/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./be-bright-web/app/app.module.ts":
  /*!*****************************************!*\
    !*** ./be-bright-web/app/app.module.ts ***!
    \*****************************************/

  /*! exports provided: AppModule */

  /***/
  function beBrightWebAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.routing */
    "./be-bright-web/app/app.routing.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./be-bright-web/app/app.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../environments/environment */
    "./be-bright-web/environments/environment.ts");
    /* harmony import */


    var _common_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./common/modules/shared.module */
    "./be-bright-web/app/common/modules/shared.module.ts");
    /* harmony import */


    var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-meta/core */
    "./node_modules/@ngx-meta/core/fesm2015/ngx-meta-core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing__WEBPACK_IMPORTED_MODULE_3__["AppRoutes"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase), _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"], _common_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"].forRoot(), _ngx_meta_core__WEBPACK_IMPORTED_MODULE_9__["MetaModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./be-bright-web/app/app.routing.ts":
  /*!******************************************!*\
    !*** ./be-bright-web/app/app.routing.ts ***!
    \******************************************/

  /*! exports provided: AppRoutes */

  /***/
  function beBrightWebAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutes", function () {
      return AppRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _common_modules_layouts_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./common/modules/layouts/wrapper/wrapper.component */
    "./be-bright-web/app/common/modules/layouts/wrapper/wrapper.component.ts");
    /* harmony import */


    var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-meta/core */
    "./node_modules/@ngx-meta/core/fesm2015/ngx-meta-core.js");

    const routes = [{
      path: '',
      component: _common_modules_layouts_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["WrapperComponent"],
      canActivateChild: [_ngx_meta_core__WEBPACK_IMPORTED_MODULE_3__["MetaGuard"]],
      children: [{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }, {
        path: 'home',
        loadChildren: () => __webpack_require__.e(
        /*! import() | container-home-page-home-page-module */
        "container-home-page-home-page-module").then(__webpack_require__.bind(null,
        /*! ./container/home-page/home-page.module */
        "./be-bright-web/app/container/home-page/home-page.module.ts")).then(m => m.HomePageModule)
      }]
    }];

    const AppRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
      initialNavigation: 'enabled',
      paramsInheritanceStrategy: 'always'
    });
    /***/

  },

  /***/
  "./be-bright-web/app/common/modules/layouts/header/header.component.scss":
  /*!*******************************************************************************!*\
    !*** ./be-bright-web/app/common/modules/layouts/header/header.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function beBrightWebAppCommonModulesLayoutsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n  box-sizing: border-box;\n}\n\nhtml {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nb, strong {\n  font-weight: 700;\n}\n\ncaption, th, td {\n  text-align: left;\n  font-weight: 400;\n  vertical-align: middle;\n}\n\nq, blockquote {\n  quotes: none;\n}\n\nq:before, q:after, blockquote:before, blockquote:after {\n  content: none;\n}\n\na {\n  outline: none;\n}\n\nimg {\n  border: none;\n}\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary {\n  display: block;\n}\n\n.nowrap {\n  white-space: nowrap;\n}\n\n.nowrap * {\n  white-space: nowrap;\n}\n\n.carousel {\n  position: relative;\n}\n\n.carousel.pointer-event {\n  touch-action: pan-y;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.carousel-inner::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: -webkit-transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\n}\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n\n.carousel-item-next:not(.carousel-item-left),\n.active.carousel-item-right {\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n}\n\n.carousel-item-prev:not(.carousel-item-right),\n.active.carousel-item-left {\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n}\n\n.carousel-fade .carousel-item {\n  opacity: 0;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  -webkit-transform: none;\n  transform: none;\n}\n\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-left,\n.carousel-fade .carousel-item-prev.carousel-item-right {\n  z-index: 1;\n  opacity: 1;\n}\n\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right {\n  z-index: 0;\n  opacity: 0;\n  -webkit-transition: 0s 0.6s opacity;\n  transition: 0s 0.6s opacity;\n}\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n  -webkit-transition: opacity 0.15s ease;\n  transition: opacity 0.15s ease;\n}\n\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n.carousel-control-next:hover,\n.carousel-control-next:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: 0.9;\n}\n\n.carousel-control-prev {\n  left: 0;\n}\n\n.carousel-control-next {\n  right: 0;\n}\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: no-repeat 50%/100% 100%;\n}\n\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e\");\n}\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e\");\n}\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  left: 0;\n  z-index: 14;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none;\n}\n\n.carousel-indicators li {\n  box-sizing: content-box;\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n  width: 30px;\n  height: 7px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  opacity: 0.5;\n  -webkit-transition: opacity 0.6s ease;\n  transition: opacity 0.6s ease;\n}\n\n.carousel-indicators .active {\n  opacity: 1;\n}\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n}\n\nngb-carousel {\n  width: inherit;\n  height: inherit;\n}\n\n.carousel-inner {\n  overflow: visible;\n}\n\n.carousel-item {\n  display: -webkit-box !important;\n  display: flex !important;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: opacity 1.2s ease-in-out, visibility 1.2s;\n  transition: opacity 1.2s ease-in-out, visibility 1.2s;\n  z-index: -1;\n  position: absolute;\n}\n\n.carousel-item.active {\n  opacity: 1;\n  visibility: visible;\n  z-index: 10;\n}\n\n.carousel-control-prev {\n  z-index: 20;\n}\n\n.carousel-control-next {\n  z-index: 20;\n}\n\n.carousel-indicators {\n  z-index: 20;\n}\n\n.carousel-item {\n  height: 100%;\n}\n\n.carousel-inner {\n  height: 100%;\n}\n\n.header {\n  display: block;\n  position: relative;\n}\n\n.header__container {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.95;\n  z-index: 1000;\n  width: 100%;\n  background-color: transparent;\n  -webkit-box-align: unset;\n          align-items: unset;\n  height: 90px;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n@media (min-width: 1024px) {\n  .header__container {\n    display: -webkit-box;\n    display: flex;\n  }\n}\n\n.header__wrapper {\n  display: none;\n  width: 50%;\n  height: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  padding: 0 5%;\n}\n\n@media (min-width: 1024px) {\n  .header__wrapper {\n    display: -webkit-box;\n    display: flex;\n    padding: 0 2%;\n  }\n}\n\n.header__nav {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 21px;\n  color: #706A6A;\n  display: -webkit-box;\n  display: flex;\n  text-decoration: none;\n  text-transform: uppercase;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n\n@media (min-width: 768px) {\n  .header__nav:hover {\n    font-family: \"Roboto\", sans-serif;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: normal;\n    line-height: 21px;\n    color: #706A6A;\n    text-decoration: none !important;\n  }\n}\n\n.header__nav:hover {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 21px;\n  color: #000000;\n  text-decoration: none !important;\n  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n.header__nav_active {\n  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n.header__mobile-menu-wrapper {\n  display: block;\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  left: 32px;\n  top: 32px;\n  z-index: 15;\n}\n\n.header__mobile-menu-icon {\n  display: block;\n  position: absolute;\n  top: 15px;\n  width: 33px;\n  height: 2px;\n  background-color: #fff;\n}\n\n.header__mobile-menu-icon:before, .header__mobile-menu-icon:after {\n  position: absolute;\n  content: \"\";\n  height: 2px;\n  width: 33px;\n  background-color: #fff;\n}\n\n.header__mobile-menu-icon:before {\n  top: -10px;\n}\n\n.header__mobile-menu-icon:after {\n  top: 10px;\n}\n\n@media (min-width: 1024px) {\n  .header__mobile-menu-icon {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlLWJyaWdodC13ZWIvYXBwL2NvbW1vbi9tb2R1bGVzL2xheW91dHMvaGVhZGVyL0M6XFxVc2Vyc1xcZm9taWNcXE9uZURyaXZlXFzQoNCw0LHQvtGH0LjQuSDRgdGC0L7Qu1xcRkVcXGJlLWJyaWdodC1tZWRpYS9iZS1icmlnaHQtd2ViXFxhcHBcXGNvbW1vblxcc2Fzc1xcX3Jlc2V0LnNjc3MiLCJiZS1icmlnaHQtd2ViL2FwcC9jb21tb24vbW9kdWxlcy9sYXlvdXRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJiZS1icmlnaHQtd2ViL2FwcC9jb21tb24vbW9kdWxlcy9sYXlvdXRzL2hlYWRlci9DOlxcVXNlcnNcXGZvbWljXFxPbmVEcml2ZVxc0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0LtcXEZFXFxiZS1icmlnaHQtbWVkaWEvYmUtYnJpZ2h0LXdlYlxcYXBwXFxjb21tb25cXHNhc3NcXGxpYnNcXGNhcm91c2VsLW5nLWJvb3RzdHJhcC5zY3NzIiwiYmUtYnJpZ2h0LXdlYi9hcHAvY29tbW9uL21vZHVsZXMvbGF5b3V0cy9oZWFkZXIvQzpcXFVzZXJzXFxmb21pY1xcT25lRHJpdmVcXNCg0LDQsdC+0YfQuNC5INGB0YLQvtC7XFxGRVxcYmUtYnJpZ2h0LW1lZGlhL2JlLWJyaWdodC13ZWJcXGFwcFxcY29tbW9uXFxtb2R1bGVzXFxsYXlvdXRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsImJlLWJyaWdodC13ZWIvYXBwL2NvbW1vbi9tb2R1bGVzL2xheW91dHMvaGVhZGVyL0M6XFxVc2Vyc1xcZm9taWNcXE9uZURyaXZlXFzQoNCw0LHQvtGH0LjQuSDRgdGC0L7Qu1xcRkVcXGJlLWJyaWdodC1tZWRpYS9iZS1icmlnaHQtd2ViXFxhcHBcXGNvbW1vblxcc2Fzc1xcX2xheWVycy5zY3NzIiwiYmUtYnJpZ2h0LXdlYi9hcHAvY29tbW9uL21vZHVsZXMvbGF5b3V0cy9oZWFkZXIvQzpcXFVzZXJzXFxmb21pY1xcT25lRHJpdmVcXNCg0LDQsdC+0YfQuNC5INGB0YLQvtC7XFxGRVxcYmUtYnJpZ2h0LW1lZGlhL25vZGVfbW9kdWxlc1xcYnJlYWtwb2ludC1zYXNzXFxzdHlsZXNoZWV0c1xcX2JyZWFrcG9pbnQuc2NzcyIsImJlLWJyaWdodC13ZWIvYXBwL2NvbW1vbi9tb2R1bGVzL2xheW91dHMvaGVhZGVyL0M6XFxVc2Vyc1xcZm9taWNcXE9uZURyaXZlXFzQoNCw0LHQvtGH0LjQuSDRgdGC0L7Qu1xcRkVcXGJlLWJyaWdodC1tZWRpYS9iZS1icmlnaHQtd2ViXFxhcHBcXGNvbW1vblxcc2Fzc1xcX3R5cG9ncmFwaHkuc2NzcyIsImJlLWJyaWdodC13ZWIvYXBwL2NvbW1vbi9tb2R1bGVzL2xheW91dHMvaGVhZGVyL0M6XFxVc2Vyc1xcZm9taWNcXE9uZURyaXZlXFzQoNCw0LHQvtGH0LjQuSDRgdGC0L7Qu1xcRkVcXGJlLWJyaWdodC1tZWRpYS9iZS1icmlnaHQtd2ViXFxhcHBcXGNvbW1vblxcc2Fzc1xcX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0VBYUUsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxnQkFBQTtBQ0dGOztBRERBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ0lGOztBREZBO0VBQ0UsZ0JBQUE7QUNLRjs7QURIQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ01GOztBREpBO0VBQ0UsWUFBQTtBQ09GOztBRExBO0VBQ0UsYUFBQTtBQ1FGOztBRE5BO0VBQ0UsYUFBQTtBQ1NGOztBRFBBO0VBQ0UsWUFBQTtBQ1VGOztBRFJBO0VBQ0UsY0FBQTtBQ1dGOztBRFRBO0VBQ0UsbUJBQUE7QUNZRjs7QURWRTtFQUNFLG1CQUFBO0FDWUo7O0FDdEVBO0VBQ0Usa0JBQUE7QUR5RUY7O0FDdEVBO0VBRUUsbUJB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QUFBO0FGeVNOOztBSXhVSTtFRlVGO0lBeUJJLGFBQUE7RUZ5U0o7QUFDRiIsImZpbGUiOiJiZS1icmlnaHQtd2ViL2FwcC9jb21tb24vbW9kdWxlcy9sYXlvdXRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcclxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxyXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXHJcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXHJcbmIsIHUsIGksIGNlbnRlcixcclxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcclxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXHJcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxyXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcclxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxyXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcclxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuaHRtbCB7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxub2wsIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcbmIsIHN0cm9uZyB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5jYXB0aW9uLCB0aCwgdGQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbnEsIGJsb2NrcXVvdGUge1xyXG4gIHF1b3Rlczogbm9uZTtcclxufVxyXG5xOmJlZm9yZSwgcTphZnRlciwgYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxuYSB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5pbWcge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24sIHN1bW1hcnkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5ub3dyYXAge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICoge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbn1cclxuIiwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250OiBpbmhlcml0O1xuICBmb250LXNpemU6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5iLCBzdHJvbmcge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5jYXB0aW9uLCB0aCwgdGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogNDAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5xLCBibG9ja3F1b3RlIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5xOmJlZm9yZSwgcTphZnRlciwgYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIge1xuICBjb250ZW50OiBub25lO1xufVxuXG5hIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24sIHN1bW1hcnkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm5vd3JhcCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ubm93cmFwICoge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY2Fyb3VzZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJvdXNlbC5wb2ludGVyLWV2ZW50IHtcbiAgLW1zLXRvdWNoLWFjdGlvbjogcGFuLXk7XG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XG59XG5cbi5jYXJvdXNlbC1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJvdXNlbC1pbm5lcjo6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5jYXJvdXNlbC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogLTEwMCU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2Fyb3VzZWwtaXRlbS5hY3RpdmUsXG4uY2Fyb3VzZWwtaXRlbS1uZXh0LFxuLmNhcm91c2VsLWl0ZW0tcHJldiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2Fyb3VzZWwtaXRlbS1uZXh0Om5vdCguY2Fyb3VzZWwtaXRlbS1sZWZ0KSxcbi5hY3RpdmUuY2Fyb3VzZWwtaXRlbS1yaWdodCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG59XG5cbi5jYXJvdXNlbC1pdGVtLXByZXY6bm90KC5jYXJvdXNlbC1pdGVtLXJpZ2h0KSxcbi5hY3RpdmUuY2Fyb3VzZWwtaXRlbS1sZWZ0IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xufVxuXG4uY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaXRlbSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5jYXJvdXNlbC1mYWRlIC5jYXJvdXNlbC1pdGVtLmFjdGl2ZSxcbi5jYXJvdXNlbC1mYWRlIC5jYXJvdXNlbC1pdGVtLW5leHQuY2Fyb3VzZWwtaXRlbS1sZWZ0LFxuLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWl0ZW0tcHJldi5jYXJvdXNlbC1pdGVtLXJpZ2h0IHtcbiAgei1pbmRleDogMTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNhcm91c2VsLWZhZGUgLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLWxlZnQsXG4uY2Fyb3VzZWwtZmFkZSAuYWN0aXZlLmNhcm91c2VsLWl0ZW0tcmlnaHQge1xuICB6LWluZGV4OiAwO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwcyAwLjZzIG9wYWNpdHk7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYsXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxNSU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBlYXNlO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2OmhvdmVyLCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2OmZvY3VzLFxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dDpob3Zlcixcbi5jYXJvdXNlbC1jb250cm9sLW5leHQ6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvdXRsaW5lOiAwO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICBsZWZ0OiAwO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbixcbi5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IDUwJS8xMDAlIDEwMCU7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSclMjNmZmYnIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBkPSdNNS4yNSAwbC00IDQgNCA0IDEuNS0xLjUtMi41LTIuNSAyLjUtMi41LTEuNS0xLjV6Jy8lM2UlM2Mvc3ZnJTNlXCIpO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nJTIzZmZmJyB2aWV3Qm94PScwIDAgOCA4JyUzZSUzY3BhdGggZD0nTTIuNzUgMGwtMS41IDEuNSAyLjUgMi41LTIuNSAyLjUgMS41IDEuNSA0LTQtNC00eicvJTNlJTNjL3N2ZyUzZVwiKTtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDUwcHg7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE0O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLW1zLWZsZXg6IDAgMSBhdXRvO1xuICBmbGV4OiAwIDEgYXV0bztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgdGV4dC1pbmRlbnQ6IC05OTlweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBvcGFjaXR5OiAwLjU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC42cyBlYXNlO1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyAuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNhcm91c2VsLWNhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNSU7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogMTUlO1xuICB6LWluZGV4OiAxMDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5uZ2ItY2Fyb3VzZWwge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uY2Fyb3VzZWwtaW5uZXIge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLmNhcm91c2VsLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjJzIGVhc2UtaW4tb3V0LCB2aXNpYmlsaXR5IDEuMnM7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jYXJvdXNlbC1pdGVtLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgei1pbmRleDogMjA7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICB6LWluZGV4OiAyMDtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMge1xuICB6LWluZGV4OiAyMDtcbn1cblxuLmNhcm91c2VsLWl0ZW0ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJvdXNlbC1pbm5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyX19jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMC45NTtcbiAgei1pbmRleDogMTAwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBhbGlnbi1pdGVtczogdW5zZXQ7XG4gIGhlaWdodDogOTBweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG4uaGVhZGVyX193cmFwcGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMCA1JTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmhlYWRlcl9fd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwIDIlO1xuICB9XG59XG4uaGVhZGVyX19uYXYge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBjb2xvcjogIzcwNkE2QTtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXJfX25hdjpob3ZlciB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgIGNvbG9yOiAjNzA2QTZBO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4uaGVhZGVyX19uYXY6aG92ZXIge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIHRleHQtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cbi5oZWFkZXJfX25hdl9hY3RpdmUge1xuICB0ZXh0LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG4uaGVhZGVyX19tb2JpbGUtbWVudS13cmFwcGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgbGVmdDogMzJweDtcbiAgdG9wOiAzMnB4O1xuICB6LWluZGV4OiAxNTtcbn1cbi5oZWFkZXJfX21vYmlsZS1tZW51LWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIHdpZHRoOiAzM3B4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXJfX21vYmlsZS1tZW51LWljb246YmVmb3JlLCAuaGVhZGVyX19tb2JpbGUtbWVudS1pY29uOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDMzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uaGVhZGVyX19tb2JpbGUtbWVudS1pY29uOmJlZm9yZSB7XG4gIHRvcDogLTEwcHg7XG59XG4uaGVhZGVyX19tb2JpbGUtbWVudS1pY29uOmFmdGVyIHtcbiAgdG9wOiAxMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuaGVhZGVyX19tb2JpbGUtbWVudS1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59IiwiLmNhcm91c2VsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC5wb2ludGVyLWV2ZW50IHtcclxuICAtbXMtdG91Y2gtYWN0aW9uOiBwYW4teTtcclxuICB0b3VjaC1hY3Rpb246IHBhbi15O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5uZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5uZXI6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjbGVhcjogYm90aDtcclxuICBjb250ZW50OiBcIlwiO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTAwJTtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dCxcclxuICAtd2Via2l0LXRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbS5hY3RpdmUsXHJcbi5jYXJvdXNlbC1pdGVtLW5leHQsXHJcbi5jYXJvdXNlbC1pdGVtLXByZXYge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbS1uZXh0Om5vdCguY2Fyb3VzZWwtaXRlbS1sZWZ0KSxcclxuLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLXJpZ2h0IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pdGVtLXByZXY6bm90KC5jYXJvdXNlbC1pdGVtLXJpZ2h0KSxcclxuLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLWxlZnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gIHRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWl0ZW0uYWN0aXZlLFxyXG4uY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaXRlbS1uZXh0LmNhcm91c2VsLWl0ZW0tbGVmdCxcclxuLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWl0ZW0tcHJldi5jYXJvdXNlbC1pdGVtLXJpZ2h0IHtcclxuICB6LWluZGV4OiAxO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1mYWRlIC5hY3RpdmUuY2Fyb3VzZWwtaXRlbS1sZWZ0LFxyXG4uY2Fyb3VzZWwtZmFkZSAuYWN0aXZlLmNhcm91c2VsLWl0ZW0tcmlnaHQge1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiAwcyAwLjZzIG9wYWNpdHk7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYsXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGVhc2U7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXY6aG92ZXIsIC5jYXJvdXNlbC1jb250cm9sLXByZXY6Zm9jdXMsXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQ6aG92ZXIsXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQ6Zm9jdXMge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbixcclxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCA1MCUgLyAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyUyM2ZmZicgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNS0yLjUtMi41IDIuNS0yLjUtMS41LTEuNXonLyUzZSUzYy9zdmclM2VcIik7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyUyM2ZmZicgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGQ9J00yLjc1IDBsLTEuNSAxLjUgMi41IDIuNS0yLjUgMi41IDEuNSAxLjUgNC00LTQtNHonLyUzZSUzYy9zdmclM2VcIik7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTQ7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIC1tcy1mbGV4OiAwIDEgYXV0bztcclxuICBmbGV4OiAwIDEgYXV0bztcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDdweDtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIHRleHQtaW5kZW50OiAtOTk5cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgb3BhY2l0eTogLjU7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2U7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIC5hY3RpdmUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE1JTtcclxuICBib3R0b206IDIwcHg7XHJcbiAgbGVmdDogMTUlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLy8gQW5pbWF0aW9ucyBmb3Igc2xpZGVyXHJcblxyXG5uZ2ItY2Fyb3VzZWwge1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuLmNhcm91c2VsLWlubmVyIHtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuMnMgZWFzZS1pbi1vdXQsIHZpc2liaWxpdHkgMS4ycztcclxuICB6LWluZGV4OiAtMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pdGVtLmFjdGl2ZXtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xyXG4gIHotaW5kZXg6IDIwO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcclxuICB6LWluZGV4OiAyMDtcclxufVxyXG5cclxuLmNhcm91c2VsLWluZGljYXRvcnN7XHJcbiAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pdGVtIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbm5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3Nhc3MvaW5kZXhcIjtcclxuXHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJl9fY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3BhY2l0eTogLjk1O1xyXG4gICAgei1pbmRleDogJG1hdGVyaWFsLW92ZXJsYXk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYWxpZ24taXRlbXM6IHVuc2V0O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KCRtZWRpYS1zbWFsbC1kZXNrdG9wKSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX193cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmc6IDAgNSU7XHJcblxyXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludCgkbWVkaWEtc21hbGwtZGVza3RvcCkge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwYWRkaW5nOiAwIDIlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbmF2IHtcclxuICAgIEBpbmNsdWRlIFRleHQtTm9ybWFsKDE4cHgsIDIxcHgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludCgkbWVkaWEtdGFibGV0KSB7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIFRleHQtTm9ybWFsKDE4cHgsIDIxcHgpO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIEBpbmNsdWRlIFRleHQtTm9ybWFsKDE4cHgsIDIxcHgsICRjb2xvci1ibGFjayk7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICB9XHJcblxyXG4gICAgJl9hY3RpdmUge1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19tb2JpbGUtbWVudS13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBsZWZ0OiAzMnB4O1xyXG4gICAgdG9wOiAzMnB4O1xyXG4gICAgei1pbmRleDogJGxheWVyLWRyb3Bkb3duO1xyXG4gIH1cclxuXHJcbiAgJl9fbW9iaWxlLW1lbnUtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIHdpZHRoOiAzM3B4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcblxyXG4gICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgd2lkdGg6IDMzcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHRvcDogLTEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIHRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KCRtZWRpYS1zbWFsbC1kZXNrdG9wKSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRsYXllci1zdGF0aWM6IDA7XHJcbiRsYXllci1kcm9wZG93bjogMTU7XHJcbiRsYXllci1vdmVybGF5OiAyMDtcclxuJGxheWVyLW1vZGFsOiAzMDtcclxuJGxheWVyLXNjcm9sbDogMTAwO1xyXG4kbGF5ZXItb3ZlcmxheS1sb2FkZXI6IDExMDtcclxuJG1hdGVyaWFsLW92ZXJsYXk6IDEwMDA7XHJcbiRsYXllci1vdmVyLW1hdGVyaWFsLWNkazogJG1hdGVyaWFsLW92ZXJsYXkgKyAxO1xyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIERlZmF1bHQgVmFyaWFibGVzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiRCcmVha3BvaW50LVNldHRpbmdzOiAoXG4gICdkZWZhdWx0IG1lZGlhJzogYWxsLFxuICAnZGVmYXVsdCBmZWF0dXJlJzogbWluLXdpZHRoLFxuICAnZGVmYXVsdCBwYWlyJzogd2lkdGgsXG5cbiAgJ2ZvcmNlIGFsbCBtZWRpYSB0eXBlJzogZmFsc2UsXG4gICd0byBlbXMnOiBmYWxzZSxcbiAgJ3RyYW5zZm9ybSByZXNvbHV0aW9ucyc6IHRydWUsXG5cbiAgJ25vIHF1ZXJpZXMnOiBmYWxzZSxcbiAgJ25vIHF1ZXJ5IGZhbGxiYWNrcyc6IGZhbHNlLFxuXG4gICdiYXNlIGZvbnQgc2l6ZSc6IDE2cHgsXG5cbiAgJ2xlZ2FjeSBzeW50YXgnOiBmYWxzZVxuKTtcblxuJGJyZWFrcG9pbnQ6ICgpICFkZWZhdWx0O1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEltcG9ydHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuQGltcG9ydCBcImJyZWFrcG9pbnQvc2V0dGluZ3NcIjtcbkBpbXBvcnQgJ2JyZWFrcG9pbnQvY29udGV4dCc7XG5AaW1wb3J0ICdicmVha3BvaW50L2hlbHBlcnMnO1xuQGltcG9ydCAnYnJlYWtwb2ludC9wYXJzZXJzJztcbkBpbXBvcnQgJ2JyZWFrcG9pbnQvbm8tcXVlcnknO1xuXG5AaW1wb3J0ICdicmVha3BvaW50L3Jlc3BvbmQtdG8nO1xuXG5AaW1wb3J0IFwiYnJlYWtwb2ludC9sZWdhY3ktc2V0dGluZ3NcIjtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBCcmVha3BvaW50IE1peGluXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuQG1peGluIGJyZWFrcG9pbnQoJHF1ZXJ5LCAkbm8tcXVlcnk6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIGxlZ2FjeS1zZXR0aW5ncy13YXJuaW5nO1xuXG4gIC8vIFJlc2V0IGNvbnRleHRzXG4gIEBpbmNsdWRlIHByaXZhdGUtYnJlYWtwb2ludC1yZXNldC1jb250ZXh0cygpO1xuXG4gICRicmVha3BvaW50OiBicmVha3BvaW50KCRxdWVyeSwgZmFsc2UpO1xuXG4gICRxdWVyeS1zdHJpbmc6IG1hcC1nZXQoJGJyZWFrcG9pbnQsICdxdWVyeScpO1xuICAkcXVlcnktZmFsbGJhY2s6IG1hcC1nZXQoJGJyZWFrcG9pbnQsICdmYWxsYmFjaycpO1xuXG4gICRwcml2YXRlLWJyZWFrcG9pbnQtY29udGV4dC1ob2xkZXI6IG1hcC1nZXQoJGJyZWFrcG9pbnQsICdjb250ZXh0IGhvbGRlcicpICFnbG9iYWw7XG4gICRwcml2YXRlLWJyZWFrcG9pbnQtcXVlcnktY291bnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnQsICdxdWVyeSBjb3VudCcpICFnbG9iYWw7XG5cbiAgLy8gQWxsb3cgZm9yIGFuIGFzLW5lZWRlZCBvdmVycmlkZSBvciB1c2FnZSBvZiBubyBxdWVyeSBmYWxsYmFjay5cbiAgQGlmICRuby1xdWVyeSAhPSBmYWxzZSB7XG4gICAgJHF1ZXJ5LWZhbGxiYWNrOiAkbm8tcXVlcnk7XG4gIH1cblxuICBAaWYgJHF1ZXJ5LWZhbGxiYWNrICE9IGZhbHNlIHtcbiAgICAkY29udGV4dC1zZXR0ZXI6IHByaXZhdGUtYnJlYWtwb2ludC1zZXQtY29udGV4dCgnbm8tcXVlcnknLCAkcXVlcnktZmFsbGJhY2spO1xuICB9XG5cbiAgLy8gUHJpbnQgT3V0IFF1ZXJ5IFN0cmluZ1xuICBAaWYgbm90IGJyZWFrcG9pbnQtZ2V0KCdubyBxdWVyaWVzJykge1xuICAgIEBtZWRpYSAjeyRxdWVyeS1zdHJpbmd9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuXG4gIEBpZiBicmVha3BvaW50LWdldCgnbm8gcXVlcnkgZmFsbGJhY2tzJykgIT0gZmFsc2Ugb3IgYnJlYWtwb2ludC1nZXQoJ25vIHF1ZXJpZXMnKSA9PSB0cnVlIHtcblxuICAgICR0eXBlOiB0eXBlLW9mKGJyZWFrcG9pbnQtZ2V0KCdubyBxdWVyeSBmYWxsYmFja3MnKSk7XG4gICAgJHByaW50OiBmYWxzZTtcblxuICAgIEBpZiAoJHR5cGUgPT0gJ2Jvb2wnKSB7XG4gICAgICAkcHJpbnQ6IHRydWU7XG4gICAgfVxuICAgIEBlbHNlIGlmICgkdHlwZSA9PSAnc3RyaW5nJykge1xuICAgICAgQGlmICRxdWVyeS1mYWxsYmFjayA9PSBicmVha3BvaW50LWdldCgnbm8gcXVlcnkgZmFsbGJhY2tzJykge1xuICAgICAgICAkcHJpbnQ6IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIEBlbHNlIGlmICgkdHlwZSA9PSAnbGlzdCcpIHtcbiAgICAgIEBlYWNoICR3cmFwcGVyIGluIGJyZWFrcG9pbnQtZ2V0KCdubyBxdWVyeSBmYWxsYmFja3MnKSB7XG4gICAgICAgIEBpZiAkcXVlcnktZmFsbGJhY2sgPT0gJHdyYXBwZXIge1xuICAgICAgICAgICRwcmludDogdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdyaXRlIEZhbGxiYWNrXG4gICAgQGlmICgkcXVlcnktZmFsbGJhY2sgIT0gZmFsc2UpIGFuZCAoJHByaW50ID09IHRydWUpIHtcbiAgICAgICR0eXBlLWZhbGxiYWNrOiB0eXBlLW9mKCRxdWVyeS1mYWxsYmFjayk7XG5cbiAgICAgIEBpZiAoJHR5cGUtZmFsbGJhY2sgIT0gJ2Jvb2wnKSB7XG4gICAgICAgICN7JHF1ZXJ5LWZhbGxiYWNrfSAmIHtcbiAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQGVsc2Uge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBwcml2YXRlLWJyZWFrcG9pbnQtcmVzZXQtY29udGV4dHMoKTtcbn1cblxuXG5AbWl4aW4gbXEoJHF1ZXJ5LCAkbm8tcXVlcnk6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoJHF1ZXJ5LCAkbm8tcXVlcnkpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIiwiQGltcG9ydCBcImNvbG9yc1wiO1xyXG5cclxuJGZvbnQtZmFtaWx5OiAnUm9ib3RvJyAhZGVmYXVsdDtcclxuJGZvbnQtZmFtaWx5LWxpZ2h0OiAnUm9ib3RvIExpZ2h0JztcclxuJGZvbnQtc2l6ZS14czogMTBweDtcclxuJGZvbnQtc2l6ZS1zOiAxMnB4O1xyXG4kZm9udC1zaXplLW06IDE0cHg7XHJcbiRmb250LXNpemUtbDogMTZweDtcclxuJGZvbnQtc2l6ZS14bDogMThweDtcclxuXHJcbkBtaXhpbiBUZXh0LU5vcm1hbCgkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRjb2xvcjogJGRhcmstZ3JheSkge1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHksIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxufVxyXG5cclxuQG1peGluIFRleHQtTWVkaXVtKCRmb250LXNpemUsICRsaW5lLWhlaWdodCwgJGNvbG9yOiAkZGFyay1ncmF5KSB7XHJcbiAgQGluY2x1ZGUgVGV4dC1Ob3JtYWwoJGZvbnQtc2l6ZSwgJGxpbmUtaGVpZ2h0LCAkY29sb3IpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbkBtaXhpbiBUZXh0LUJvbGQoJGZvbnQtc2l6ZSwgJGxpbmUtaGVpZ2h0LCAkY29sb3I6ICRkYXJrLWdyYXkpIHtcclxuICBAaW5jbHVkZSBUZXh0LU5vcm1hbCgkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRjb2xvcik7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuQG1peGluIFRleHQtU3Ryb25nLUJvbGQoJGZvbnQtc2l6ZSwgJGxpbmUtaGVpZ2h0LCAkY29sb3I6ICRkYXJrLWdyYXkpIHtcclxuICBAaW5jbHVkZSBUZXh0LU5vcm1hbCgkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRjb2xvcik7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuQG1peGluIFRleHQtTm9ybWFsLWxpZ2h0KCRmb250LXNpemUsICRsaW5lLWhlaWdodCwgJGNvbG9yOiAkZGFyay1ncmF5KSB7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1saWdodCwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6ICRmb250LXNpemU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICBjb2xvcjogJGNvbG9yO1xyXG59XHJcblxyXG4iLCIkY29sb3ItYmxhY2s6ICMwMDAwMDA7XHJcbiRkYXJrLWdyYXk6ICM3MDZBNkE7XHJcbiRjb2xvci10aXRsZTogIzRGNEY0RjtcclxuJGNvbG9yLXdoaXRlOiAjZmZmO1xyXG4kY29sb3ItaWNvbjogIzYzNjM2MztcclxuJGNvbG9yLXRpdGxlLW1vYmlsZTogI0YyRjJGMjtcclxuIl19 */";
    /***/
  },

  /***/
  "./be-bright-web/app/common/modules/layouts/header/header.component.ts":
  /*!*****************************************************************************!*\
    !*** ./be-bright-web/app/common/modules/layouts/header/header.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function beBrightWebAppCommonModulesLayoutsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_menu_links_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/menu-links.service */
    "./be-bright-web/app/common/services/menu-links.service.ts");

    let HeaderComponent = class HeaderComponent {
      constructor(menuLinksService) {
        this.menuLinksService = menuLinksService;
        this.onMenuToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      ngOnInit() {
        this.menuLinksService.menuLinks.subscribe(links => this.navigationsLinks = links);
      }

      menuToggle() {
        this.onMenuToggle.emit();
      }

    };

    HeaderComponent.ctorParameters = () => [{
      type: _services_menu_links_service__WEBPACK_IMPORTED_MODULE_2__["MenuLinksService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HeaderComponent.prototype, "isCloseIconShown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], HeaderComponent.prototype, "onMenuToggle", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'bb-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./be-bright-web/app/common/modules/layouts/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./be-bright-web/app/common/modules/layouts/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./be-bright-web/app/common/modules/layouts/layouts.module.ts":
  /*!********************************************************************!*\
    !*** ./be-bright-web/app/common/modules/layouts/layouts.module.ts ***!
    \********************************************************************/

  /*! exports provided: LayoutsModule */

  /***/
  function beBrightWebAppCommonModulesLayoutsLayoutsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutsModule", function () {
      return LayoutsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./be-bright-web/app/common/modules/layouts/header/header.component.ts");
    /* harmony import */


    var _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./wrapper/wrapper.component */
    "./be-bright-web/app/common/modules/layouts/wrapper/wrapper.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./be-bright-web/app/common/modules/layouts/menu/menu.component.ts");
    /* harmony import */


    var _services_menu_links_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/menu-links.service */
    "./be-bright-web/app/common/services/menu-links.service.ts");

    let LayoutsModule = class LayoutsModule {};
    LayoutsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"]],
      declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["WrapperComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"]],
      exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["WrapperComponent"]],
      providers: [_services_menu_links_service__WEBPACK_IMPORTED_MODULE_8__["MenuLinksService"]]
    })], LayoutsModule);
    /***/
  },

  /***/
  "./be-bright-web/app/common/modules/layouts/menu/menu.component.scss":
  /*!***************************************************************************!*\
    !*** ./be-bright-web/app/common/modules/layouts/menu/menu.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function beBrightWebAppCommonModulesLayoutsMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n  box-sizing: border-box;\n}\n\nhtml {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nb, strong {\n  font-weight: 700;\n}\n\ncaption, th, td {\n  text-align: left;\n  font-weight: 400;\n  vertical-align: middle;\n}\n\nq, blockquote {\n  quotes: none;\n}\n\nq:before, q:after, blockquote:before, blockquote:after {\n  content: none;\n}\n\na {\n  outline: none;\n}\n\nimg {\n  border: none;\n}\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary {\n  display: block;\n}\n\n.nowrap {\n  white-space: nowrap;\n}\n\n.nowrap * {\n  white-space: nowrap;\n}\n\n.carousel {\n  position: relative;\n}\n\n.carousel.pointer-event {\n  touch-action: pan-y;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.carousel-inner::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: -webkit-transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\n}\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n\n.carousel-item-next:not(.carousel-item-left),\n.active.carousel-item-right {\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n}\n\n.carousel-item-prev:not(.carousel-item-right),\n.active.carousel-item-left {\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n}\n\n.carousel-fade .carousel-item {\n  opacity: 0;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  -webkit-transform: none;\n  transform: none;\n}\n\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-left,\n.carousel-fade .carousel-item-prev.carousel-item-right {\n  z-index: 1;\n  opacity: 1;\n}\n\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right {\n  z-index: 0;\n  opacity: 0;\n  -webkit-transition: 0s 0.6s opacity;\n  transition: 0s 0.6s opacity;\n}\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n  -webkit-transition: opacity 0.15s ease;\n  transition: opacity 0.15s ease;\n}\n\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n.carousel-control-next:hover,\n.carousel-control-next:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: 0.9;\n}\n\n.carousel-control-prev {\n  left: 0;\n}\n\n.carousel-control-next {\n  right: 0;\n}\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: no-repeat 50%/100% 100%;\n}\n\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e\");\n}\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e\");\n}\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  left: 0;\n  z-index: 14;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none;\n}\n\n.carousel-indicators li {\n  box-sizing: content-box;\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n  width: 30px;\n  height: 7px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  opacity: 0.5;\n  -webkit-transition: opacity 0.6s ease;\n  transition: opacity 0.6s ease;\n}\n\n.carousel-indicators .active {\n  opacity: 1;\n}\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n}\n\nngb-carousel {\n  width: inherit;\n  height: inherit;\n}\n\n.carousel-inner {\n  overflow: visible;\n}\n\n.carousel-item {\n  display: -webkit-box !important;\n  display: flex !important;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: opacity 1.2s ease-in-out, visibility 1.2s;\n  transition: opacity 1.2s ease-in-out, visibility 1.2s;\n  z-index: -1;\n  position: absolute;\n}\n\n.carousel-item.active {\n  opacity: 1;\n  visibility: visible;\n  z-index: 10;\n}\n\n.carousel-control-prev {\n  z-index: 20;\n}\n\n.carousel-control-next {\n  z-index: 20;\n}\n\n.carousel-indicators {\n  z-index: 20;\n}\n\n.carousel-item {\n  height: 100%;\n}\n\n.carousel-inner {\n  height: 100%;\n}\n\n.bb-menu {\n  width: 290px;\n  background: #fff;\n  opacity: 0.8;\n  height: 100%;\n  padding: 85px 32px 0 32px;\n  position: relative;\n  overflow: hidden;\n}\n\n.bb-menu__wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 300px;\n}\n\n.bb-menu__nav {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 21px;\n  color: #706A6A;\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  text-decoration: none;\n  text-transform: uppercase;\n  margin-bottom: 25px;\n}\n\n.bb-menu__nav_active {\n  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n  text-decoration: none;\n}\n\n.bb-menu__nav:hover {\n  text-decoration: none !important;\n}\n\n.bb-menu__mobile-menu-close {\n  display: block;\n  position: absolute;\n  right: 32px;\n  top: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.3;\n  z-index: 15;\n}\n\n.bb-menu__mobile-menu-close:before, .bb-menu__mobile-menu-close:after {\n  position: absolute;\n  left: 15px;\n  content: \" \";\n  height: 33px;\n  width: 2px;\n  background-color: #636363;\n}\n\n.bb-menu__mobile-menu-close:before {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.bb-menu__mobile-menu-close:after {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\n@media (min-width: 1024px) {\n  .bb-menu__mobile-menu-close {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlLWJyaWdodC13ZWIvYXBwL2NvbW1vbi9tb2R1bGVzL2xheW91dHMvbWVudS9DOlxcVXNlcnNcXGZvbWljXFxPbmVEcml2ZVxc0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0LtcXEZFXFxiZS1icmlnaHQtbWVkaWEvYmUtYnJpZ2h0LXdlYlxcYXBwXFxjb21tb25cXHNhc3NcXF9yZXNldC5zY3NzIiwiYmUtYnJpZ2h0LXdlYi9hcHAvY29tbW9uL21vZHVsZXMvbGF5b3V0cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJiZS1icmlnaHQtd2ViL2FwcC9jb21tb24vbW9kdWxlcy9sYXlvdXRzL21lbnUvQzpcXFVzZXJzXFxmb21pY1xcT25lRHJpdmVcXNCg0LDQsdC+0YfQuNC5INGB0YLQvtC7XFxGRVxcYmUtYnJpZ2h0LW1lZGlhL2JlLWJyaWdodC13ZWJcXGFwcFxcY29tbW9uXFxzYXNzXFxsaWJzXFxjYXJvdXNlbC1uZy1ib290c3RyYXAuc2NzcyIsImJlLWJyaWdodC13ZWIvYXBwL2NvbW1vbi9tb2R1bGVzL2xheW91dHMvbWVudS9DOlxcVXNlcnNcXGZvbWljXFxPbmVEcml2ZVxc0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0LtcXEZFXFxiZS1icmlnaHQtbWVkaWEvYmUtYnJpZ2h0LXdlYlxcYXBwXFxjb21tb25cXG1vZHVsZXNcXGxheW91dHNcXG1lbnVcXG1lbnUuY29tcG9uZW50LnNjc3MiLCJiZS1icmlnaHQtd2ViL2FwcC9jb21tb24vbW9kdWxlcy9sYXlvdXRzL21lbnUvQzpcXFVzZXJzXFxmb21pY1xcT25lRHJpdmVcXNCg0LDQsdC+0YfQuNC5INGB0YLQvtC7XFxGRVxcYmUtYnJpZ2h0LW1lZGlhL2JlLWJyaWdodC13ZWJcXGFwcFxcY29tbW9uXFxzYXNzXFxfY29sb3JzLnNjc3MiLCJiZS1icmlnaHQtd2ViL2FwcC9jb21tb24vbW9kdWxlcy9sYXlvdXRzL21lbnUvQzpcXFVzZXJzXFxmb21pY1xcT25lRHJpdmVcXNCg0LDQsdC+0YfQuNC5INGB0YLQvtC7XFxGRVxcYmUtYnJpZ2h0LW1lZGlhL2JlLWJyaWdodC13ZWJcXGFwcFxcY29tbW9uXFxzYXNzXFxfdHlwb2dyYXBoeS5zY3NzIiwiYmUtYnJpZ2h0LXdlYi9hcHAvY29tbW9uL21vZHVsZXMvbGF5b3V0cy9tZW51L0M6XFxVc2Vyc1xcZm9taWNcXE9uZURyaXZlXFzQoNCw0LHQvtGH0LjQuSDRgdGC0L7Qu1xcRkVcXGJlLWJyaWdodC1tZWRpYS9iZS1icmlnaHQtd2ViXFxhcHBcXGNvbW1vblxcc2Fzc1xcX2xheWVycy5zY3NzIiwiYmUtYnJpZ2h0LXdlYi9hcHAvY29tbW9uL21vZHVsZXMvbGF5b3V0cy9tZW51L0M6XFxVc2Vyc1xcZm9taWNcXE9uZURyaXZlXFzQoNCw0LHQvtGH0LjQuSDRgdGC0L7Qu1xcRkVcXGJlLWJyaWdodC1tZWRpYS9ub2RlX21vZHVsZXNcXGJyZWFrcG9pbnQtc2Fzc1xcc3R5bGVzaGVldHNcXF9icmVha3BvaW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7RUFhRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QURBQTtFQUNFLGdCQUFBO0FDR0Y7O0FEREE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDSUY7O0FERkE7RUFDRSxnQkFBQTtBQ0tGOztBREhBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDTUY7O0FESkE7RUFDRSxZQUFBO0FDT0Y7O0FETEE7RUFDRSxhQUFBO0FDUUY7O0FETkE7RUFDRSxhQUFBO0FDU0Y7O0FEUEE7RUFDRSxZQUFBO0FDVUY7O0FEUkE7RUFDRSxjQUFBO0FDV0Y7O0FEVEE7RUFDRSxtQkFBQTtBQ1lGOztBRFZFO0VBQ0UsbUJBQUE7QUNZSjs7QUN0RUE7RUFDRSxrQkFBQTtBRHlFRjs7QUN0RUE7RUFFRSxtQkFBQTtBRHlFRjs7QUN0RUE7RUFDRSxr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RUx2QixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJGRzZCO0VFRjdCLGNEZlU7RURrQlIsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBRnFTSjs7QUVuU0k7RUFDRSwwQ0FBQTtFQUNBLHFCQUFBO0FGcVNOOztBRWxTSTtFQUNFLGdDQUFBO0FGb1NOOztBRWhTRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0cxQ2E7QUw0VWpCOztBRWhTSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQy9DTztBSGlWYjs7QUUvUkk7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FGaVNOOztBRTlSSTtFQUNFLGlDQUFBO1VBQUEseUJBQUE7QUZnU047O0FNM1JJO0VKN0JGO0lBNEJJLGFBQUE7RUZnU0o7QUFDRiIsImZpbGUiOiJiZS1icmlnaHQtd2ViL2FwcC9jb21tb24vbW9kdWxlcy9sYXlvdXRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxyXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXHJcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcclxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcclxuYiwgdSwgaSwgY2VudGVyLFxyXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxyXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcclxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXHJcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxyXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXHJcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxyXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5odG1sIHtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5vbCwgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuYiwgc3Ryb25nIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbmNhcHRpb24sIHRoLCB0ZCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxucSwgYmxvY2txdW90ZSB7XHJcbiAgcXVvdGVzOiBub25lO1xyXG59XHJcbnE6YmVmb3JlLCBxOmFmdGVyLCBibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlciB7XHJcbiAgY29udGVudDogbm9uZTtcclxufVxyXG5hIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbmltZyB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiwgc3VtbWFyeSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLm5vd3JhcCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgKiB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxufVxyXG4iLCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmIsIHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmNhcHRpb24sIHRoLCB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbnEsIGJsb2NrcXVvdGUge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbnE6YmVmb3JlLCBxOmFmdGVyLCBibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlciB7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbmEge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5pbWcge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiwgc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubm93cmFwIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5ub3dyYXAgKiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jYXJvdXNlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcm91c2VsLnBvaW50ZXItZXZlbnQge1xuICAtbXMtdG91Y2gtYWN0aW9uOiBwYW4teTtcbiAgdG91Y2gtYWN0aW9uOiBwYW4teTtcbn1cblxuLmNhcm91c2VsLWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcm91c2VsLWlubmVyOjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLmNhcm91c2VsLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAtMTAwJTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jYXJvdXNlbC1pdGVtLmFjdGl2ZSxcbi5jYXJvdXNlbC1pdGVtLW5leHQsXG4uY2Fyb3VzZWwtaXRlbS1wcmV2IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jYXJvdXNlbC1pdGVtLW5leHQ6bm90KC5jYXJvdXNlbC1pdGVtLWxlZnQpLFxuLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLXJpZ2h0IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbn1cblxuLmNhcm91c2VsLWl0ZW0tcHJldjpub3QoLmNhcm91c2VsLWl0ZW0tcmlnaHQpLFxuLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLWxlZnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG5cbi5jYXJvdXNlbC1mYWRlIC5jYXJvdXNlbC1pdGVtIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWl0ZW0uYWN0aXZlLFxuLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWl0ZW0tbmV4dC5jYXJvdXNlbC1pdGVtLWxlZnQsXG4uY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaXRlbS1wcmV2LmNhcm91c2VsLWl0ZW0tcmlnaHQge1xuICB6LWluZGV4OiAxO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY2Fyb3VzZWwtZmFkZSAuYWN0aXZlLmNhcm91c2VsLWl0ZW0tbGVmdCxcbi5jYXJvdXNlbC1mYWRlIC5hY3RpdmUuY2Fyb3VzZWwtaXRlbS1yaWdodCB7XG4gIHotaW5kZXg6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDBzIDAuNnMgb3BhY2l0eTtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldixcbi5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDE1JTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMC41O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGVhc2U7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXY6aG92ZXIsIC5jYXJvdXNlbC1jb250cm9sLXByZXY6Zm9jdXMsXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0OmhvdmVyLFxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dDpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG91dGxpbmU6IDA7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gIGxlZnQ6IDA7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICByaWdodDogMDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLFxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgNTAlLzEwMCUgMTAwJTtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyUyM2ZmZicgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNS0yLjUtMi41IDIuNS0yLjUtMS41LTEuNXonLyUzZSUzYy9zdmclM2VcIik7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSclMjNmZmYnIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBkPSdNMi43NSAwbC0xLjUgMS41IDIuNSAyLjUtMi41IDIuNSAxLjUgMS41IDQtNC00LTR6Jy8lM2UlM2Mvc3ZnJTNlXCIpO1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogNTBweDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTQ7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMTUlO1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAtbXMtZmxleDogMCAxIGF1dG87XG4gIGZsZXg6IDAgMSBhdXRvO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiA3cHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICB0ZXh0LWluZGVudDogLTk5OXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2U7XG59XG5cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1JTtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiAxNSU7XG4gIHotaW5kZXg6IDEwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm5nYi1jYXJvdXNlbCB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5jYXJvdXNlbC1pbm5lciB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uY2Fyb3VzZWwtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuMnMgZWFzZS1pbi1vdXQsIHZpc2liaWxpdHkgMS4ycztcbiAgei1pbmRleDogLTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNhcm91c2VsLWl0ZW0uYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICB6LWluZGV4OiAyMDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4uY2Fyb3VzZWwtaXRlbSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcm91c2VsLWlubmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYmItbWVudSB7XG4gIHdpZHRoOiAyOTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgb3BhY2l0eTogMC44O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDg1cHggMzJweCAwIDMycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5iYi1tZW51X193cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDMwMHB4O1xufVxuLmJiLW1lbnVfX25hdiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGNvbG9yOiAjNzA2QTZBO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmJiLW1lbnVfX25hdl9hY3RpdmUge1xuICB0ZXh0LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5iYi1tZW51X19uYXY6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cbi5iYi1tZW51X19tb2JpbGUtbWVudS1jbG9zZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzMnB4O1xuICB0b3A6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIG9wYWNpdHk6IDAuMztcbiAgei1pbmRleDogMTU7XG59XG4uYmItbWVudV9fbW9iaWxlLW1lbnUtY2xvc2U6YmVmb3JlLCAuYmItbWVudV9fbW9iaWxlLW1lbnUtY2xvc2U6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE1cHg7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBoZWlnaHQ6IDMzcHg7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MzYzNjM7XG59XG4uYmItbWVudV9fbW9iaWxlLW1lbnUtY2xvc2U6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLmJiLW1lbnVfX21vYmlsZS1tZW51LWNsb3NlOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmJiLW1lbnVfX21vYmlsZS1tZW51LWNsb3NlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59IiwiLmNhcm91c2VsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC5wb2ludGVyLWV2ZW50IHtcclxuICAtbXMtdG91Y2gtYWN0aW9uOiBwYW4teTtcclxuICB0b3VjaC1hY3Rpb246IHBhbi15O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5uZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5uZXI6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjbGVhcjogYm90aDtcclxuICBjb250ZW50OiBcIlwiO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTAwJTtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dCxcclxuICAtd2Via2l0LXRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbS5hY3RpdmUsXHJcbi5jYXJvdXNlbC1pdGVtLW5leHQsXHJcbi5jYXJvdXNlbC1pdGVtLXByZXYge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbS1uZXh0Om5vdCguY2Fyb3VzZWwtaXRlbS1sZWZ0KSxcclxuLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLXJpZ2h0IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pdGVtLXByZXY6bm90KC5jYXJvdXNlbC1pdGVtLXJpZ2h0KSxcclxuLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLWxlZnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gIHRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWl0ZW0uYWN0aXZlLFxyXG4uY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaXRlbS1uZXh0LmNhcm91c2VsLWl0ZW0tbGVmdCxcclxuLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWl0ZW0tcHJldi5jYXJvdXNlbC1pdGVtLXJpZ2h0IHtcclxuICB6LWluZGV4OiAxO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1mYWRlIC5hY3RpdmUuY2Fyb3VzZWwtaXRlbS1sZWZ0LFxyXG4uY2Fyb3VzZWwtZmFkZSAuYWN0aXZlLmNhcm91c2VsLWl0ZW0tcmlnaHQge1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiAwcyAwLjZzIG9wYWNpdHk7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYsXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGVhc2U7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXY6aG92ZXIsIC5jYXJvdXNlbC1jb250cm9sLXByZXY6Zm9jdXMsXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQ6aG92ZXIsXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQ6Zm9jdXMge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbixcclxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCA1MCUgLyAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyUyM2ZmZicgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNS0yLjUtMi41IDIuNS0yLjUtMS41LTEuNXonLyUzZSUzYy9zdmclM2VcIik7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyUyM2ZmZicgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGQ9J00yLjc1IDBsLTEuNSAxLjUgMi41IDIuNS0yLjUgMi41IDEuNSAxLjUgNC00LTQtNHonLyUzZSUzYy9zdmclM2VcIik7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTQ7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIC1tcy1mbGV4OiAwIDEgYXV0bztcclxuICBmbGV4OiAwIDEgYXV0bztcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDdweDtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIHRleHQtaW5kZW50OiAtOTk5cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgb3BhY2l0eTogLjU7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2U7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIC5hY3RpdmUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE1JTtcclxuICBib3R0b206IDIwcHg7XHJcbiAgbGVmdDogMTUlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLy8gQW5pbWF0aW9ucyBmb3Igc2xpZGVyXHJcblxyXG5uZ2ItY2Fyb3VzZWwge1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuLmNhcm91c2VsLWlubmVyIHtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuMnMgZWFzZS1pbi1vdXQsIHZpc2liaWxpdHkgMS4ycztcclxuICB6LWluZGV4OiAtMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pdGVtLmFjdGl2ZXtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xyXG4gIHotaW5kZXg6IDIwO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcclxuICB6LWluZGV4OiAyMDtcclxufVxyXG5cclxuLmNhcm91c2VsLWluZGljYXRvcnN7XHJcbiAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pdGVtIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbm5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3Nhc3MvaW5kZXhcIjtcclxuXHJcbi5iYi1tZW51IHtcclxuICB3aWR0aDogMjkwcHg7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xyXG4gIG9wYWNpdHk6IC44O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiA4NXB4IDMycHggMCAzMnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAmX193cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fbmF2IHtcclxuICAgIEBpbmNsdWRlIFRleHQtTm9ybWFsKDE4cHgsIDIxcHgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcblxyXG4gICAgJl9hY3RpdmUge1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19tb2JpbGUtbWVudS1jbG9zZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzMnB4O1xyXG4gICAgdG9wOiAzMnB4O1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICB6LWluZGV4OiAkbGF5ZXItZHJvcGRvd247XHJcblxyXG4gICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgIGNvbnRlbnQ6ICcgJztcclxuICAgICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgICB3aWR0aDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItaWNvbjtcclxuICAgIH1cclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KCRtZWRpYS1zbWFsbC1kZXNrdG9wKSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRjb2xvci1ibGFjazogIzAwMDAwMDtcclxuJGRhcmstZ3JheTogIzcwNkE2QTtcclxuJGNvbG9yLXRpdGxlOiAjNEY0RjRGO1xyXG4kY29sb3Itd2hpdGU6ICNmZmY7XHJcbiRjb2xvci1pY29uOiAjNjM2MzYzO1xyXG4kY29sb3ItdGl0bGUtbW9iaWxlOiAjRjJGMkYyO1xyXG4iLCJAaW1wb3J0IFwiY29sb3JzXCI7XHJcblxyXG4kZm9udC1mYW1pbHk6ICdSb2JvdG8nICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktbGlnaHQ6ICdSb2JvdG8gTGlnaHQnO1xyXG4kZm9udC1zaXplLXhzOiAxMHB4O1xyXG4kZm9udC1zaXplLXM6IDEycHg7XHJcbiRmb250LXNpemUtbTogMTRweDtcclxuJGZvbnQtc2l6ZS1sOiAxNnB4O1xyXG4kZm9udC1zaXplLXhsOiAxOHB4O1xyXG5cclxuQG1peGluIFRleHQtTm9ybWFsKCRmb250LXNpemUsICRsaW5lLWhlaWdodCwgJGNvbG9yOiAkZGFyay1ncmF5KSB7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6ICRmb250LXNpemU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICBjb2xvcjogJGNvbG9yO1xyXG59XHJcblxyXG5AbWl4aW4gVGV4dC1NZWRpdW0oJGZvbnQtc2l6ZSwgJGxpbmUtaGVpZ2h0LCAkY29sb3I6ICRkYXJrLWdyYXkpIHtcclxuICBAaW5jbHVkZSBUZXh0LU5vcm1hbCgkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRjb2xvcik7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuQG1peGluIFRleHQtQm9sZCgkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRjb2xvcjogJGRhcmstZ3JheSkge1xyXG4gIEBpbmNsdWRlIFRleHQtTm9ybWFsKCRmb250LXNpemUsICRsaW5lLWhlaWdodCwgJGNvbG9yKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5AbWl4aW4gVGV4dC1TdHJvbmctQm9sZCgkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRjb2xvcjogJGRhcmstZ3JheSkge1xyXG4gIEBpbmNsdWRlIFRleHQtTm9ybWFsKCRmb250LXNpemUsICRsaW5lLWhlaWdodCwgJGNvbG9yKTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5AbWl4aW4gVGV4dC1Ob3JtYWwtbGlnaHQoJGZvbnQtc2l6ZSwgJGxpbmUtaGVpZ2h0LCAkY29sb3I6ICRkYXJrLWdyYXkpIHtcclxuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWxpZ2h0LCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcbn1cclxuXHJcbiIsIiRsYXllci1zdGF0aWM6IDA7XHJcbiRsYXllci1kcm9wZG93bjogMTU7XHJcbiRsYXllci1vdmVybGF5OiAyMDtcclxuJGxheWVyLW1vZGFsOiAzMDtcclxuJGxheWVyLXNjcm9sbDogMTAwO1xyXG4kbGF5ZXItb3ZlcmxheS1sb2FkZXI6IDExMDtcclxuJG1hdGVyaWFsLW92ZXJsYXk6IDEwMDA7XHJcbiRsYXllci1vdmVyLW1hdGVyaWFsLWNkazogJG1hdGVyaWFsLW92ZXJsYXkgKyAxO1xyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIERlZmF1bHQgVmFyaWFibGVzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiRCcmVha3BvaW50LVNldHRpbmdzOiAoXG4gICdkZWZhdWx0IG1lZGlhJzogYWxsLFxuICAnZGVmYXVsdCBmZWF0dXJlJzogbWluLXdpZHRoLFxuICAnZGVmYXVsdCBwYWlyJzogd2lkdGgsXG5cbiAgJ2ZvcmNlIGFsbCBtZWRpYSB0eXBlJzogZmFsc2UsXG4gICd0byBlbXMnOiBmYWxzZSxcbiAgJ3RyYW5zZm9ybSByZXNvbHV0aW9ucyc6IHRydWUsXG5cbiAgJ25vIHF1ZXJpZXMnOiBmYWxzZSxcbiAgJ25vIHF1ZXJ5IGZhbGxiYWNrcyc6IGZhbHNlLFxuXG4gICdiYXNlIGZvbnQgc2l6ZSc6IDE2cHgsXG5cbiAgJ2xlZ2FjeSBzeW50YXgnOiBmYWxzZVxuKTtcblxuJGJyZWFrcG9pbnQ6ICgpICFkZWZhdWx0O1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEltcG9ydHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuQGltcG9ydCBcImJyZWFrcG9pbnQvc2V0dGluZ3NcIjtcbkBpbXBvcnQgJ2JyZWFrcG9pbnQvY29udGV4dCc7XG5AaW1wb3J0ICdicmVha3BvaW50L2hlbHBlcnMnO1xuQGltcG9ydCAnYnJlYWtwb2ludC9wYXJzZXJzJztcbkBpbXBvcnQgJ2JyZWFrcG9pbnQvbm8tcXVlcnknO1xuXG5AaW1wb3J0ICdicmVha3BvaW50L3Jlc3BvbmQtdG8nO1xuXG5AaW1wb3J0IFwiYnJlYWtwb2ludC9sZWdhY3ktc2V0dGluZ3NcIjtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBCcmVha3BvaW50IE1peGluXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuQG1peGluIGJyZWFrcG9pbnQoJHF1ZXJ5LCAkbm8tcXVlcnk6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIGxlZ2FjeS1zZXR0aW5ncy13YXJuaW5nO1xuXG4gIC8vIFJlc2V0IGNvbnRleHRzXG4gIEBpbmNsdWRlIHByaXZhdGUtYnJlYWtwb2ludC1yZXNldC1jb250ZXh0cygpO1xuXG4gICRicmVha3BvaW50OiBicmVha3BvaW50KCRxdWVyeSwgZmFsc2UpO1xuXG4gICRxdWVyeS1zdHJpbmc6IG1hcC1nZXQoJGJyZWFrcG9pbnQsICdxdWVyeScpO1xuICAkcXVlcnktZmFsbGJhY2s6IG1hcC1nZXQoJGJyZWFrcG9pbnQsICdmYWxsYmFjaycpO1xuXG4gICRwcml2YXRlLWJyZWFrcG9pbnQtY29udGV4dC1ob2xkZXI6IG1hcC1nZXQoJGJyZWFrcG9pbnQsICdjb250ZXh0IGhvbGRlcicpICFnbG9iYWw7XG4gICRwcml2YXRlLWJyZWFrcG9pbnQtcXVlcnktY291bnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnQsICdxdWVyeSBjb3VudCcpICFnbG9iYWw7XG5cbiAgLy8gQWxsb3cgZm9yIGFuIGFzLW5lZWRlZCBvdmVycmlkZSBvciB1c2FnZSBvZiBubyBxdWVyeSBmYWxsYmFjay5cbiAgQGlmICRuby1xdWVyeSAhPSBmYWxzZSB7XG4gICAgJHF1ZXJ5LWZhbGxiYWNrOiAkbm8tcXVlcnk7XG4gIH1cblxuICBAaWYgJHF1ZXJ5LWZhbGxiYWNrICE9IGZhbHNlIHtcbiAgICAkY29udGV4dC1zZXR0ZXI6IHByaXZhdGUtYnJlYWtwb2ludC1zZXQtY29udGV4dCgnbm8tcXVlcnknLCAkcXVlcnktZmFsbGJhY2spO1xuICB9XG5cbiAgLy8gUHJpbnQgT3V0IFF1ZXJ5IFN0cmluZ1xuICBAaWYgbm90IGJyZWFrcG9pbnQtZ2V0KCdubyBxdWVyaWVzJykge1xuICAgIEBtZWRpYSAjeyRxdWVyeS1zdHJpbmd9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuXG4gIEBpZiBicmVha3BvaW50LWdldCgnbm8gcXVlcnkgZmFsbGJhY2tzJykgIT0gZmFsc2Ugb3IgYnJlYWtwb2ludC1nZXQoJ25vIHF1ZXJpZXMnKSA9PSB0cnVlIHtcblxuICAgICR0eXBlOiB0eXBlLW9mKGJyZWFrcG9pbnQtZ2V0KCdubyBxdWVyeSBmYWxsYmFja3MnKSk7XG4gICAgJHByaW50OiBmYWxzZTtcblxuICAgIEBpZiAoJHR5cGUgPT0gJ2Jvb2wnKSB7XG4gICAgICAkcHJpbnQ6IHRydWU7XG4gICAgfVxuICAgIEBlbHNlIGlmICgkdHlwZSA9PSAnc3RyaW5nJykge1xuICAgICAgQGlmICRxdWVyeS1mYWxsYmFjayA9PSBicmVha3BvaW50LWdldCgnbm8gcXVlcnkgZmFsbGJhY2tzJykge1xuICAgICAgICAkcHJpbnQ6IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIEBlbHNlIGlmICgkdHlwZSA9PSAnbGlzdCcpIHtcbiAgICAgIEBlYWNoICR3cmFwcGVyIGluIGJyZWFrcG9pbnQtZ2V0KCdubyBxdWVyeSBmYWxsYmFja3MnKSB7XG4gICAgICAgIEBpZiAkcXVlcnktZmFsbGJhY2sgPT0gJHdyYXBwZXIge1xuICAgICAgICAgICRwcmludDogdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdyaXRlIEZhbGxiYWNrXG4gICAgQGlmICgkcXVlcnktZmFsbGJhY2sgIT0gZmFsc2UpIGFuZCAoJHByaW50ID09IHRydWUpIHtcbiAgICAgICR0eXBlLWZhbGxiYWNrOiB0eXBlLW9mKCRxdWVyeS1mYWxsYmFjayk7XG5cbiAgICAgIEBpZiAoJHR5cGUtZmFsbGJhY2sgIT0gJ2Jvb2wnKSB7XG4gICAgICAgICN7JHF1ZXJ5LWZhbGxiYWNrfSAmIHtcbiAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQGVsc2Uge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBwcml2YXRlLWJyZWFrcG9pbnQtcmVzZXQtY29udGV4dHMoKTtcbn1cblxuXG5AbWl4aW4gbXEoJHF1ZXJ5LCAkbm8tcXVlcnk6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoJHF1ZXJ5LCAkbm8tcXVlcnkpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./be-bright-web/app/common/modules/layouts/menu/menu.component.ts":
  /*!*************************************************************************!*\
    !*** ./be-bright-web/app/common/modules/layouts/menu/menu.component.ts ***!
    \*************************************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function beBrightWebAppCommonModulesLayoutsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_menu_links_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/menu-links.service */
    "./be-bright-web/app/common/services/menu-links.service.ts");

    let MenuComponent = class MenuComponent {
      constructor(menuLinksService) {
        this.menuLinksService = menuLinksService;
        this.onMenuToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      ngOnInit() {
        this.menuLinksService.menuLinks.subscribe(links => this.navigationsLinks = links);
      }

      menuToggle() {
        this.onMenuToggle.emit();
      }

    };

    MenuComponent.ctorParameters = () => [{
      type: _services_menu_links_service__WEBPACK_IMPORTED_MODULE_2__["MenuLinksService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MenuComponent.prototype, "onMenuToggle", void 0);
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'bb-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./be-bright-web/app/common/modules/layouts/menu/menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.scss */
      "./be-bright-web/app/common/modules/layouts/menu/menu.component.scss")).default]
    })], MenuComponent);
    /***/
  },

  /***/
  "./be-bright-web/app/common/modules/layouts/wrapper/wrapper.component.scss":
  /*!*********************************************************************************!*\
    !*** ./be-bright-web/app/common/modules/layouts/wrapper/wrapper.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function beBrightWebAppCommonModulesLayoutsWrapperWrapperComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZS1icmlnaHQtd2ViL2FwcC9jb21tb24vbW9kdWxlcy9sYXlvdXRzL3dyYXBwZXIvd3JhcHBlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./be-bright-web/app/common/modules/layouts/wrapper/wrapper.component.ts":
  /*!*******************************************************************************!*\
    !*** ./be-bright-web/app/common/modules/layouts/wrapper/wrapper.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: WrapperComponent */

  /***/
  function beBrightWebAppCommonModulesLayoutsWrapperWrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WrapperComponent", function () {
      return WrapperComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let WrapperComponent = class WrapperComponent {
      constructor() {
        this.isOpenMenuIconShown = true;
      }

      ngOnInit() {}

      toggleMobileIcon() {
        this.isOpenMenuIconShown = !this.isOpenMenuIconShown;
      }

    };
    WrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'bb-wrapper',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wrapper.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./be-bright-web/app/common/modules/layouts/wrapper/wrapper.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wrapper.component.scss */
      "./be-bright-web/app/common/modules/layouts/wrapper/wrapper.component.scss")).default]
    })], WrapperComponent);
    /***/
  },

  /***/
  "./be-bright-web/app/common/modules/shared.module.ts":
  /*!***********************************************************!*\
    !*** ./be-bright-web/app/common/modules/shared.module.ts ***!
    \***********************************************************/

  /*! exports provided: SharedModule */

  /***/
  function beBrightWebAppCommonModulesSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./layouts/layouts.module */
    "./be-bright-web/app/common/modules/layouts/layouts.module.ts");

    var SharedModule_1;
    let SharedModule = SharedModule_1 = class SharedModule {
      static forRoot() {
        return {
          ngModule: SharedModule_1
        };
      }

    };
    SharedModule = SharedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__["LayoutsModule"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./be-bright-web/app/common/services/menu-links.service.ts":
  /*!*****************************************************************!*\
    !*** ./be-bright-web/app/common/services/menu-links.service.ts ***!
    \*****************************************************************/

  /*! exports provided: MenuLinksService */

  /***/
  function beBrightWebAppCommonServicesMenuLinksServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuLinksService", function () {
      return MenuLinksService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    let MenuLinksService = class MenuLinksService {
      constructor() {
        this.navigations = [{
          link: '/she-and-he',
          linkName: 'she&he'
        }, {
          link: '/music',
          linkName: 'music'
        }, {
          link: '/events',
          linkName: 'events'
        }, {
          link: '/video',
          linkName: 'video'
        }, {
          link: '/other',
          linkName: 'other'
        }, {
          link: '/about',
          linkName: 'contacts'
        }];
        this.linksSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.navigations);
        this.menuLinks = this.linksSource.asObservable();
      }

    };
    MenuLinksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MenuLinksService);
    /***/
  },

  /***/
  "./be-bright-web/environments/environment.ts":
  /*!***************************************************!*\
    !*** ./be-bright-web/environments/environment.ts ***!
    \***************************************************/

  /*! exports provided: environment */

  /***/
  function beBrightWebEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false,
      firebase: {
        apiKey: 'AIzaSyCjSU8OBA5n37IN9yTPQlD20qUdWDRKWzc',
        authDomain: 'be-bright-media.firebaseapp.com',
        databaseURL: 'https://be-bright-media.firebaseio.com',
        projectId: 'be-bright-media',
        storageBucket: 'be-bright-media.appspot.com',
        messagingSenderId: '1045496756884',
        appId: '1:1045496756884:web:1b70649e3c54a4ae48d281'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./be-bright-web/main.ts":
  /*!*******************************!*\
    !*** ./be-bright-web/main.ts ***!
    \*******************************/

  /*! no exports provided */

  /***/
  function beBrightWebMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./be-bright-web/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./be-bright-web/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./be-bright-web/app/common/modules/layouts/header/header.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./be-bright-web/app/common/modules/layouts/header/header.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsBeBrightWebAppCommonModulesLayoutsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"header\">\n  <div class=\"header__container\">\n    <div class=\"header__wrapper\">\n      <a class=\"header__nav\"\n         *ngFor=\"let pages of navigationsLinks\"\n         [routerLink]=\"[pages.link]\"\n         routerLinkActive=\"header__nav_active\">\n        {{pages.linkName}}\n      </a>\n    </div>\n  </div>\n  <div class=\"header__mobile-menu-wrapper\"\n       (click)=\"menuToggle()\">\n    <div class=\"header__mobile-menu-icon\"></div>\n  </div>\n</section>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./be-bright-web/app/common/modules/layouts/menu/menu.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./be-bright-web/app/common/modules/layouts/menu/menu.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsBeBrightWebAppCommonModulesLayoutsMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"bb-menu\">\n  <div class=\"bb-menu__wrapper\">\n    <a class=\"bb-menu__nav\"\n       *ngFor=\"let pages of navigationsLinks\"\n       [routerLink]=\"[pages.link]\"\n       routerLinkActive=\"bb-menu__nav_active\">\n      {{pages.linkName}}\n    </a>\n  </div>\n  <div class=\"bb-menu__mobile-menu-close\"\n       (click)=\"menuToggle()\"></div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./be-bright-web/app/common/modules/layouts/wrapper/wrapper.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./be-bright-web/app/common/modules/layouts/wrapper/wrapper.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsBeBrightWebAppCommonModulesLayoutsWrapperWrapperComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container>\n  <ng-container *ngTemplateOutlet=\"menuTemplate\"></ng-container>\n</ng-container>\n\n<mat-sidenav-container>\n  <mat-sidenav #sidenav>\n    <bb-menu (onMenuToggle)=\"sidenav.toggle() && toggleMobileIcon()\"></bb-menu>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <main role=\"main\">\n      <section>\n        <router-outlet></router-outlet>\n      </section>\n    </main>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<ng-template #menuTemplate>\n  <bb-header (onMenuToggle)=\"sidenav.toggle() && toggleMobileIcon()\"\n             [isCloseIconShown]=\"isOpenMenuIconShown\"></bb-header>\n<ng-template></ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  0:
  /*!*************************************!*\
    !*** multi ./be-bright-web/main.ts ***!
    \*************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\fomic\OneDrive\Рабочий стол\FE\be-bright-media\be-bright-web\main.ts */
    "./be-bright-web/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map