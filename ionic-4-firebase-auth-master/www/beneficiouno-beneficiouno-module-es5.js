function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["beneficiouno-beneficiouno-module"], {
  /***/
  "./src/app/beneficiouno/beneficiouno-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/beneficiouno/beneficiouno-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: BeneficiounoPageRoutingModule */

  /***/
  function srcAppBeneficiounoBeneficiounoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeneficiounoPageRoutingModule", function () {
      return BeneficiounoPageRoutingModule;
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


    var _beneficiouno_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./beneficiouno.page */
    "./src/app/beneficiouno/beneficiouno.page.ts");

    var routes = [{
      path: '',
      component: _beneficiouno_page__WEBPACK_IMPORTED_MODULE_2__["BeneficiounoPage"]
    }];

    var BeneficiounoPageRoutingModule = function BeneficiounoPageRoutingModule() {
      _classCallCheck(this, BeneficiounoPageRoutingModule);
    };

    BeneficiounoPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BeneficiounoPageRoutingModule
    });
    BeneficiounoPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BeneficiounoPageRoutingModule_Factory(t) {
        return new (t || BeneficiounoPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BeneficiounoPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BeneficiounoPageRoutingModule, [{
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
  "./src/app/beneficiouno/beneficiouno.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/beneficiouno/beneficiouno.module.ts ***!
    \*****************************************************/

  /*! exports provided: BeneficiounoPageModule */

  /***/
  function srcAppBeneficiounoBeneficiounoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeneficiounoPageModule", function () {
      return BeneficiounoPageModule;
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


    var _beneficiouno_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./beneficiouno-routing.module */
    "./src/app/beneficiouno/beneficiouno-routing.module.ts");
    /* harmony import */


    var _beneficiouno_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./beneficiouno.page */
    "./src/app/beneficiouno/beneficiouno.page.ts");

    var BeneficiounoPageModule = function BeneficiounoPageModule() {
      _classCallCheck(this, BeneficiounoPageModule);
    };

    BeneficiounoPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BeneficiounoPageModule
    });
    BeneficiounoPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BeneficiounoPageModule_Factory(t) {
        return new (t || BeneficiounoPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _beneficiouno_routing_module__WEBPACK_IMPORTED_MODULE_4__["BeneficiounoPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BeneficiounoPageModule, {
        declarations: [_beneficiouno_page__WEBPACK_IMPORTED_MODULE_5__["BeneficiounoPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _beneficiouno_routing_module__WEBPACK_IMPORTED_MODULE_4__["BeneficiounoPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BeneficiounoPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _beneficiouno_routing_module__WEBPACK_IMPORTED_MODULE_4__["BeneficiounoPageRoutingModule"]],
          declarations: [_beneficiouno_page__WEBPACK_IMPORTED_MODULE_5__["BeneficiounoPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/beneficiouno/beneficiouno.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/beneficiouno/beneficiouno.page.ts ***!
    \***************************************************/

  /*! exports provided: BeneficiounoPage */

  /***/
  function srcAppBeneficiounoBeneficiounoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeneficiounoPage", function () {
      return BeneficiounoPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");

    var BeneficiounoPage =
    /*#__PURE__*/
    function () {
      function BeneficiounoPage() {
        _classCallCheck(this, BeneficiounoPage);
      }

      _createClass(BeneficiounoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BeneficiounoPage;
    }();

    BeneficiounoPage.ɵfac = function BeneficiounoPage_Factory(t) {
      return new (t || BeneficiounoPage)();
    };

    BeneficiounoPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BeneficiounoPage,
      selectors: [["app-beneficiouno"]],
      decls: 10,
      vars: 0,
      consts: [["translucent", ""], ["slot", "start"], ["fullscreen", ""], ["src", "../../assets/img/rmblogo.png"], ["text-center", "", "color", "success"], ["src", "../../assets/img/beneficio/1.jpg"]],
      template: function BeneficiounoPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-menu-button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-title", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xA1BENEFICIO ADQUIRIDO!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["CssUtilsDeprecations"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlbmVmaWNpb3Vuby9iZW5lZmljaW91bm8ucGFnZS5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BeneficiounoPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-beneficiouno',
          templateUrl: './beneficiouno.page.html',
          styleUrls: ['./beneficiouno.page.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=beneficiouno-beneficiouno-module-es5.js.map