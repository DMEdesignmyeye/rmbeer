function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rkids-rkids-module"], {
  /***/
  "./src/app/rkids/rkids-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/rkids/rkids-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: RkidsPageRoutingModule */

  /***/
  function srcAppRkidsRkidsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RkidsPageRoutingModule", function () {
      return RkidsPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _rkids_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./rkids.page */
    "./src/app/rkids/rkids.page.ts");

    var routes = [{
      path: '',
      component: _rkids_page__WEBPACK_IMPORTED_MODULE_2__["RkidsPage"]
    }];

    var RkidsPageRoutingModule = function RkidsPageRoutingModule() {
      _classCallCheck(this, RkidsPageRoutingModule);
    };

    RkidsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RkidsPageRoutingModule
    });
    RkidsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RkidsPageRoutingModule_Factory(t) {
        return new (t || RkidsPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RkidsPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RkidsPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/rkids/rkids.module.ts":
  /*!***************************************!*\
    !*** ./src/app/rkids/rkids.module.ts ***!
    \***************************************/

  /*! exports provided: RkidsPageModule */

  /***/
  function srcAppRkidsRkidsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RkidsPageModule", function () {
      return RkidsPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
    /* harmony import */


    var _rkids_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./rkids-routing.module */
    "./src/app/rkids/rkids-routing.module.ts");
    /* harmony import */


    var _rkids_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./rkids.page */
    "./src/app/rkids/rkids.page.ts");

    var RkidsPageModule = function RkidsPageModule() {
      _classCallCheck(this, RkidsPageModule);
    };

    RkidsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RkidsPageModule
    });
    RkidsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RkidsPageModule_Factory(t) {
        return new (t || RkidsPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _rkids_routing_module__WEBPACK_IMPORTED_MODULE_4__["RkidsPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RkidsPageModule, {
        declarations: [_rkids_page__WEBPACK_IMPORTED_MODULE_5__["RkidsPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _rkids_routing_module__WEBPACK_IMPORTED_MODULE_4__["RkidsPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RkidsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _rkids_routing_module__WEBPACK_IMPORTED_MODULE_4__["RkidsPageRoutingModule"]],
          declarations: [_rkids_page__WEBPACK_IMPORTED_MODULE_5__["RkidsPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/rkids/rkids.page.ts":
  /*!*************************************!*\
    !*** ./src/app/rkids/rkids.page.ts ***!
    \*************************************/

  /*! exports provided: RkidsPage */

  /***/
  function srcAppRkidsRkidsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RkidsPage", function () {
      return RkidsPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");

    var RkidsPage =
    /*#__PURE__*/
    function () {
      function RkidsPage() {
        _classCallCheck(this, RkidsPage);
      }

      _createClass(RkidsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RkidsPage;
    }();

    RkidsPage.ɵfac = function RkidsPage_Factory(t) {
      return new (t || RkidsPage)();
    };

    RkidsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RkidsPage,
      selectors: [["app-rkids"]],
      decls: 27,
      vars: 0,
      consts: [["fullscreen", ""], [2, "color", "white !important"], [2, "color", "white !important", "font-weight", "bold"], ["src", "../../assets/img/menu/rkids.jpg"], ["slot", "start"]],
      template: function RkidsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-card-subtitle", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "RKIDS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-card-title", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Rock Kids");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Los tradicionales Rock Kids ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-avatar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Rock Kids 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Rock Kids 1....");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-avatar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Rock Kids 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Rock Kids 2 .....");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardSubtitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]],
      styles: [".ios[_ngcontent-%COMP%]   page-home[_ngcontent-%COMP%]   .header-image[_ngcontent-%COMP%], .md[_ngcontent-%COMP%]   page-home[_ngcontent-%COMP%]   .header-image[_ngcontent-%COMP%] {\n  background-image: url(https://ununsplash.imgix.net/photo-1421091242698-34f6ad7fc088?fit=crop&fm=jpg&h=650&q=75&w=950);\n  height: 40vh;\n}\n.ios[_ngcontent-%COMP%]   page-home[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%], .md[_ngcontent-%COMP%]   page-home[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  box-shadow: 0px -1px 13px 1px rgba(0, 0, 0, 0.3);\n}\n.ios[_ngcontent-%COMP%]   page-home[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%], .md[_ngcontent-%COMP%]   page-home[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n.ios[_ngcontent-%COMP%]   page-home[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%], .md[_ngcontent-%COMP%]   page-home[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n.ios[_ngcontent-%COMP%]   page-home[_ngcontent-%COMP%]   ion-navbar[_ngcontent-%COMP%], .md[_ngcontent-%COMP%]   page-home[_ngcontent-%COMP%]   ion-navbar[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  box-shadow: 0px 1px 13px 1px rgba(0, 0, 0, 0.77);\n}\n.ios[_ngcontent-%COMP%]   page-home[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%], .md[_ngcontent-%COMP%]   page-home[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  padding: 0px 12px;\n  opacity: 0.7;\n  position: relative;\n  top: -50px;\n}\n.ios[_ngcontent-%COMP%]   page-home[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%], .md[_ngcontent-%COMP%]   page-home[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.ios[_ngcontent-%COMP%]   page-home[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%], .md[_ngcontent-%COMP%]   page-home[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  background-color: #fff;\n  width: 100%;\n  margin: 0;\n  margin-bottom: 25px;\n  position: relative;\n  top: -30px;\n}\n.ios[_ngcontent-%COMP%]   page-home[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]:last-of-type, .md[_ngcontent-%COMP%]   page-home[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 0 !important;\n}\n.ios[_ngcontent-%COMP%]   page-home[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], .md[_ngcontent-%COMP%]   page-home[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmtpZHMvQzpcXFVzZXJzXFxOaWNvbGFzXFxEb2N1bWVudHNcXHJtYlxcaW9uaWMtNC1maXJlYmFzZS1hdXRoLW1hc3Rlci9zcmNcXGFwcFxccmtpZHNcXHJraWRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmtpZHMvcmtpZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRO0VBQ0kscUhBQUE7RUFDQSxZQUFBO0FDSFo7QURNUTtFQUNJLGdEQUFBO0FDSlo7QURPUTtFQUNJLHlCQUFBO0FDTFo7QURRUTtFQUNJLGtDQUFBO1VBQUEsMEJBQUE7QUNOWjtBRFNRO0VBQ0ksWUFBQTtFQUNBLGdEQUFBO0FDUFo7QURVUTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ1JaO0FEV1E7RUFDSyxzQkFBQTtBQ1RiO0FEWVE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNWWjtBRGFRO0VBQ0ksMkJBQUE7QUNYWjtBRGNRO0VBQ0ksc0JBQUE7QUNaWiIsImZpbGUiOiJzcmMvYXBwL3JraWRzL3JraWRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb3MsIC5tZCB7XHJcblxyXG4gICAgcGFnZS1ob21lIHtcclxuXHJcbiAgICAgICAgLmhlYWRlci1pbWFnZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3VudW5zcGxhc2guaW1naXgubmV0L3Bob3RvLTE0MjEwOTEyNDI2OTgtMzRmNmFkN2ZjMDg4P2ZpdD1jcm9wJmZtPWpwZyZoPTY1MCZxPTc1Jnc9OTUwKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1haW4tY29udGVudCB7IFxyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggLTFweCAxM3B4IDFweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2Nyb2xsLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLW5hdmJhciB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAxM3B4IDFweCByZ2JhKDAsMCwwLDAuNzcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLXNlZ21lbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTJweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogLTUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IC0zMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWNhcmQ6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5pb3MgcGFnZS1ob21lIC5oZWFkZXItaW1hZ2UsIC5tZCBwYWdlLWhvbWUgLmhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3VudW5zcGxhc2guaW1naXgubmV0L3Bob3RvLTE0MjEwOTEyNDI2OTgtMzRmNmFkN2ZjMDg4P2ZpdD1jcm9wJmZtPWpwZyZoPTY1MCZxPTc1Jnc9OTUwKTtcbiAgaGVpZ2h0OiA0MHZoO1xufVxuLmlvcyBwYWdlLWhvbWUgLm1haW4tY29udGVudCwgLm1kIHBhZ2UtaG9tZSAubWFpbi1jb250ZW50IHtcbiAgYm94LXNoYWRvdzogMHB4IC0xcHggMTNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLmlvcyBwYWdlLWhvbWUgLnNjcm9sbC1jb250ZW50LCAubWQgcGFnZS1ob21lIC5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG59XG4uaW9zIHBhZ2UtaG9tZSBpb24taGVhZGVyLCAubWQgcGFnZS1ob21lIGlvbi1oZWFkZXIge1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbn1cbi5pb3MgcGFnZS1ob21lIGlvbi1uYXZiYXIsIC5tZCBwYWdlLWhvbWUgaW9uLW5hdmJhciB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzcpO1xufVxuLmlvcyBwYWdlLWhvbWUgaW9uLXNlZ21lbnQsIC5tZCBwYWdlLWhvbWUgaW9uLXNlZ21lbnQge1xuICBwYWRkaW5nOiAwcHggMTJweDtcbiAgb3BhY2l0eTogMC43O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUwcHg7XG59XG4uaW9zIHBhZ2UtaG9tZSBpb24tc2VnbWVudC1idXR0b24sIC5tZCBwYWdlLWhvbWUgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5pb3MgcGFnZS1ob21lIGlvbi1jYXJkLCAubWQgcGFnZS1ob21lIGlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zMHB4O1xufVxuLmlvcyBwYWdlLWhvbWUgaW9uLWNhcmQ6bGFzdC1vZi10eXBlLCAubWQgcGFnZS1ob21lIGlvbi1jYXJkOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbi5pb3MgcGFnZS1ob21lIGlvbi1pdGVtLCAubWQgcGFnZS1ob21lIGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RkidsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-rkids',
          templateUrl: './rkids.page.html',
          styleUrls: ['./rkids.page.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=rkids-rkids-module-es5.js.map