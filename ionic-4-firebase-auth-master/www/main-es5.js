function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /**
    * Ionic 4 Firebase Email Auth
    *
    * Copyright © 2019-present Enappd. All rights reserved.
    *
    * This source code is licensed as per the terms found in the
    * LICENSE.md file in the root directory of this source tree.
    */


    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-login-module */
        "login-login-module").then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'signup',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | signup-signup-module */
        "signup-signup-module").then(__webpack_require__.bind(null,
        /*! ./signup/signup.module */
        "./src/app/signup/signup.module.ts")).then(function (m) {
          return m.SignupPageModule;
        });
      }
    }, {
      path: 'forgot',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | forgot-forgot-module */
        "forgot-forgot-module").then(__webpack_require__.bind(null,
        /*! ./forgot/forgot.module */
        "./src/app/forgot/forgot.module.ts")).then(function (m) {
          return m.ForgotPageModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'qrscann',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | qrscann-qrscann-module */
        "qrscann-qrscann-module").then(__webpack_require__.bind(null,
        /*! ./qrscann/qrscann.module */
        "./src/app/qrscann/qrscann.module.ts")).then(function (m) {
          return m.QrscannPageModule;
        });
      }
    }, {
      path: 'gallery',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | gallery-gallery-module */
        "gallery-gallery-module").then(__webpack_require__.bind(null,
        /*! ./gallery/gallery.module */
        "./src/app/gallery/gallery.module.ts")).then(function (m) {
          return m.GalleryPageModule;
        });
      }
    }, {
      path: 'agenda',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | agenda-agenda-module */
        "agenda-agenda-module").then(__webpack_require__.bind(null,
        /*! ./agenda/agenda.module */
        "./src/app/agenda/agenda.module.ts")).then(function (m) {
          return m.AgendaPageModule;
        });
      }
    }, {
      path: 'form',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | form-form-module */
        "form-form-module").then(__webpack_require__.bind(null,
        /*! ./form/form.module */
        "./src/app/form/form.module.ts")).then(function (m) {
          return m.FormPageModule;
        });
      }
    }, {
      path: 'beneficiouno',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | beneficiouno-beneficiouno-module */
        "beneficiouno-beneficiouno-module").then(__webpack_require__.bind(null,
        /*! ./beneficiouno/beneficiouno.module */
        "./src/app/beneficiouno/beneficiouno.module.ts")).then(function (m) {
          return m.BeneficiounoPageModule;
        });
      }
    }, {
      path: 'rabas',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | rabas-rabas-module */
        "rabas-rabas-module").then(__webpack_require__.bind(null,
        /*! ./rabas/rabas.module */
        "./src/app/rabas/rabas.module.ts")).then(function (m) {
          return m.RabasPageModule;
        });
      }
    }, {
      path: 'entradas',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | entradas-entradas-module */
        "entradas-entradas-module").then(__webpack_require__.bind(null,
        /*! ./entradas/entradas.module */
        "./src/app/entradas/entradas.module.ts")).then(function (m) {
          return m.EntradasPageModule;
        });
      }
    }, {
      path: 'tablas',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tablas-tablas-module */
        "tablas-tablas-module").then(__webpack_require__.bind(null,
        /*! ./tablas/tablas.module */
        "./src/app/tablas/tablas.module.ts")).then(function (m) {
          return m.TablasPageModule;
        });
      }
    }, {
      path: 'platos',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | platos-platos-module */
        "platos-platos-module").then(__webpack_require__.bind(null,
        /*! ./platos/platos.module */
        "./src/app/platos/platos.module.ts")).then(function (m) {
          return m.PlatosPageModule;
        });
      }
    }, {
      path: 'pastas',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pastas-pastas-module */
        "pastas-pastas-module").then(__webpack_require__.bind(null,
        /*! ./pastas/pastas.module */
        "./src/app/pastas/pastas.module.ts")).then(function (m) {
          return m.PastasPageModule;
        });
      }
    }, {
      path: 'minuta',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | minuta-minuta-module */
        "minuta-minuta-module").then(__webpack_require__.bind(null,
        /*! ./minuta/minuta.module */
        "./src/app/minuta/minuta.module.ts")).then(function (m) {
          return m.MinutaPageModule;
        });
      }
    }, {
      path: 'pizzas',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pizzas-pizzas-module */
        "pizzas-pizzas-module").then(__webpack_require__.bind(null,
        /*! ./pizzas/pizzas.module */
        "./src/app/pizzas/pizzas.module.ts")).then(function (m) {
          return m.PizzasPageModule;
        });
      }
    }, {
      path: 'burger',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | burger-burger-module */
        "burger-burger-module").then(__webpack_require__.bind(null,
        /*! ./burger/burger.module */
        "./src/app/burger/burger.module.ts")).then(function (m) {
          return m.BurgerPageModule;
        });
      }
    }, {
      path: 'lomos',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | lomos-lomos-module */
        "lomos-lomos-module").then(__webpack_require__.bind(null,
        /*! ./lomos/lomos.module */
        "./src/app/lomos/lomos.module.ts")).then(function (m) {
          return m.LomosPageModule;
        });
      }
    }, {
      path: 'parrilla',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | parrilla-parrilla-module */
        "parrilla-parrilla-module").then(__webpack_require__.bind(null,
        /*! ./parrilla/parrilla.module */
        "./src/app/parrilla/parrilla.module.ts")).then(function (m) {
          return m.ParrillaPageModule;
        });
      }
    }, {
      path: 'tacos',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tacos-tacos-module */
        "tacos-tacos-module").then(__webpack_require__.bind(null,
        /*! ./tacos/tacos.module */
        "./src/app/tacos/tacos.module.ts")).then(function (m) {
          return m.TacosPageModule;
        });
      }
    }, {
      path: 'fajitas',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | fajitas-fajitas-module */
        "fajitas-fajitas-module").then(__webpack_require__.bind(null,
        /*! ./fajitas/fajitas.module */
        "./src/app/fajitas/fajitas.module.ts")).then(function (m) {
          return m.FajitasPageModule;
        });
      }
    }, {
      path: 'fchicken',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | fchicken-fchicken-module */
        "fchicken-fchicken-module").then(__webpack_require__.bind(null,
        /*! ./fchicken/fchicken.module */
        "./src/app/fchicken/fchicken.module.ts")).then(function (m) {
          return m.FchickenPageModule;
        });
      }
    }, {
      path: 'sandwichs',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sandwichs-sandwichs-module */
        "sandwichs-sandwichs-module").then(__webpack_require__.bind(null,
        /*! ./sandwichs/sandwichs.module */
        "./src/app/sandwichs/sandwichs.module.ts")).then(function (m) {
          return m.SandwichsPageModule;
        });
      }
    }, {
      path: 'ensaladas',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | ensaladas-ensaladas-module */
        "ensaladas-ensaladas-module").then(__webpack_require__.bind(null,
        /*! ./ensaladas/ensaladas.module */
        "./src/app/ensaladas/ensaladas.module.ts")).then(function (m) {
          return m.EnsaladasPageModule;
        });
      }
    }, {
      path: 'rkids',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | rkids-rkids-module */
        "rkids-rkids-module").then(__webpack_require__.bind(null,
        /*! ./rkids/rkids.module */
        "./src/app/rkids/rkids.module.ts")).then(function (m) {
          return m.RkidsPageModule;
        });
      }
    }, {
      path: 'postres',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | postres-postres-module */
        "postres-postres-module").then(__webpack_require__.bind(null,
        /*! ./postres/postres.module */
        "./src/app/postres/postres.module.ts")).then(function (m) {
          return m.PostresPageModule;
        });
      }
    }, {
      path: 'misilestank',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | misilestank-misilestank-module */
        "misilestank-misilestank-module").then(__webpack_require__.bind(null,
        /*! ./misilestank/misilestank.module */
        "./src/app/misilestank/misilestank.module.ts")).then(function (m) {
          return m.MisilestankPageModule;
        });
      }
    }, {
      path: 'cervezatirada',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | cervezatirada-cervezatirada-module */
        "cervezatirada-cervezatirada-module").then(__webpack_require__.bind(null,
        /*! ./cervezatirada/cervezatirada.module */
        "./src/app/cervezatirada/cervezatirada.module.ts")).then(function (m) {
          return m.CervezatiradaPageModule;
        });
      }
    }, {
      path: 'superbalon',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | superbalon-superbalon-module */
        "superbalon-superbalon-module").then(__webpack_require__.bind(null,
        /*! ./superbalon/superbalon.module */
        "./src/app/superbalon/superbalon.module.ts")).then(function (m) {
          return m.SuperbalonPageModule;
        });
      }
    }, {
      path: 'cocteleria',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | cocteleria-cocteleria-module */
        "cocteleria-cocteleria-module").then(__webpack_require__.bind(null,
        /*! ./cocteleria/cocteleria.module */
        "./src/app/cocteleria/cocteleria.module.ts")).then(function (m) {
          return m.CocteleriaPageModule;
        });
      }
    }, {
      path: 'deautor',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | deautor-deautor-module */
        "deautor-deautor-module").then(__webpack_require__.bind(null,
        /*! ./deautor/deautor.module */
        "./src/app/deautor/deautor.module.ts")).then(function (m) {
          return m.DeautorPageModule;
        });
      }
    }, {
      path: 'csabor',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | csabor-csabor-module */
        "csabor-csabor-module").then(__webpack_require__.bind(null,
        /*! ./csabor/csabor.module */
        "./src/app/csabor/csabor.module.ts")).then(function (m) {
          return m.CsaborPageModule;
        });
      }
    }, {
      path: 'gintonic',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | gintonic-gintonic-module */
        "gintonic-gintonic-module").then(__webpack_require__.bind(null,
        /*! ./gintonic/gintonic.module */
        "./src/app/gintonic/gintonic.module.ts")).then(function (m) {
          return m.GintonicPageModule;
        });
      }
    }, {
      path: 'whiskys',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | whiskys-whiskys-module */
        "whiskys-whiskys-module").then(__webpack_require__.bind(null,
        /*! ./whiskys/whiskys.module */
        "./src/app/whiskys/whiskys.module.ts")).then(function (m) {
          return m.WhiskysPageModule;
        });
      }
    }, {
      path: 'espirituosos',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | espirituosos-espirituosos-module */
        "espirituosos-espirituosos-module").then(__webpack_require__.bind(null,
        /*! ./espirituosos/espirituosos.module */
        "./src/app/espirituosos/espirituosos.module.ts")).then(function (m) {
          return m.EspirituososPageModule;
        });
      }
    }, {
      path: 'energizantes',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | energizantes-energizantes-module */
        "energizantes-energizantes-module").then(__webpack_require__.bind(null,
        /*! ./energizantes/energizantes.module */
        "./src/app/energizantes/energizantes.module.ts")).then(function (m) {
          return m.EnergizantesPageModule;
        });
      }
    }, {
      path: 'espumantes',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | espumantes-espumantes-module */
        "espumantes-espumantes-module").then(__webpack_require__.bind(null,
        /*! ./espumantes/espumantes.module */
        "./src/app/espumantes/espumantes.module.ts")).then(function (m) {
          return m.EspumantesPageModule;
        });
      }
    }, {
      path: 'other',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | other-other-module */
        "other-other-module").then(__webpack_require__.bind(null,
        /*! ./other/other.module */
        "./src/app/other/other.module.ts")).then(function (m) {
          return m.OtherPageModule;
        });
      }
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | profile-profile-module */
        "profile-profile-module").then(__webpack_require__.bind(null,
        /*! ./profile/profile.module */
        "./src/app/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
    /* harmony import */


    var _home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home.service */
    "./src/app/home.service.ts");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
    * Ionic 4 Firebase Email Auth
    *
    * Copyright © 2019-present Enappd. All rights reserved.
    *
    * This source code is licensed as per the terms found in the
    * LICENSE.md file in the root directory of this source tree.
    */


    function AppComponent_ion_item_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ion_item_18_Template_ion_item_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.goTo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", data_r2.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r2.name, " ");
      }
    }

    function AppComponent_ion_item_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ion_item_26_Template_ion_item_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.goTo2();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", data_r5.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.name, " ");
      }
    }

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, splashScreen, statusBar, menu, data, router) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.menu = menu;
        this.data = data;
        this.router = router;
        this.searchTerm2 = "";
        this.searchTerm = "";
        this.jsonData2 = "";
        this.jsonData = "";
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();

            _this.setFilteredItems();

            _this.setFilteredItems2();
          });
        }
      }, {
        key: "openFirst",
        value: function openFirst() {
          this.menu.enable(true, 'first');
          this.menu.open('first');
        }
      }, {
        key: "goTo",
        value: function goTo() {
          this.menu.close('first');
          this.setFilteredItems();
        }
      }, {
        key: "goTo2",
        value: function goTo2() {
          this.menu.close('end');
          this.setFilteredItems2();
        }
      }, {
        key: "setFilteredItems",
        value: function setFilteredItems() {
          this.jsonData = this.data.filterItems(this.searchTerm);
        }
      }, {
        key: "ionViewDidLoad2",
        value: function ionViewDidLoad2() {
          this.setFilteredItems2();
          this.ionViewDidLoad2();
        }
      }, {
        key: "setFilteredItems2",
        value: function setFilteredItems2() {
          this.jsonData2 = this.data.filterItems2(this.searchTerm2);
          this.ionViewDidLoad2();
        }
      }, {
        key: "openEnd",
        value: function openEnd() {
          this.menu.open('end');
          this.menu.enable(false, 'first');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_home_service__WEBPACK_IMPORTED_MODULE_2__["Data"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 40,
      vars: 4,
      consts: [["slot", "start", 2, "color", "white !important"], [3, "click"], ["text-center", "", 2, "background-color", "black", "color", "white !important", "font-weight", "bold"], ["name", "arrow-round-back"], ["name", "arrow-round-forward"], ["slot", "end", 2, "color", "white !important"], ["side", "start", "menuId", "first"], ["color", "danger"], [2, "color", "white"], ["placeholder", "Buscar", 2, "color", "white", 3, "ngModel", "ngModelChange", "ionInput"], ["style", "color: white !important", "routerDirection", "forward", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], ["side", "end", "menuId", "end"], ["color", "primary"], ["placeholder", "Buscar", 3, "ngModel", "ngModelChange", "ionInput"], ["main", ""], ["slot", "bottom"], ["tab", "home"], ["name", "home"], ["tab", "agenda"], ["name", "calendar"], ["tab", "gallery"], ["name", "images"], ["tab", "qrscann"], ["name", "qr-scanner"], ["tab", "login"], ["name", "person"], ["routerDirection", "forward", 2, "color", "white !important", 3, "routerLink", "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-menu-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_ion_menu_button_click_4_listener($event) {
            return ctx.openFirst();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Men\xFA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ion-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-buttons", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-menu-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_ion_menu_button_click_10_listener($event) {
            return ctx.openEnd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-menu", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-toolbar", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-title", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Comidas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-searchbar", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_ion_searchbar_ngModelChange_16_listener($event) {
            return ctx.searchTerm = $event;
          })("ionInput", function AppComponent_Template_ion_searchbar_ionInput_16_listener($event) {
            return ctx.setFilteredItems();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_ion_item_18_Template, 2, 2, "ion-item", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-menu", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-toolbar", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Bebidas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-searchbar", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_ion_searchbar_ngModelChange_24_listener($event) {
            return ctx.searchTerm2 = $event;
          })("ionInput", function AppComponent_Template_ion_searchbar_ionInput_24_listener($event) {
            return ctx.setFilteredItems2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AppComponent_ion_item_26_Template, 2, 2, "ion-item", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-router-outlet", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-tabs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-tab-bar", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-tab-button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "ion-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ion-tab-button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "ion-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ion-tab-button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "ion-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ion-tab-button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "ion-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ion-tab-button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "ion-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchTerm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jsonData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchTerm2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jsonData2);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["CssUtilsDeprecations"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonMenu"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRouterOutlet"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: 'app.component.html'
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]
        }, {
          type: _home_service__WEBPACK_IMPORTED_MODULE_2__["Data"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/email-composer/ngx */
    "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/barcode-scanner/ngx */
    "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _home_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home.service */
    "./src/app/home.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /**
    * Ionic 4 Firebase Email Auth
    *
    * Copyright © 2019-present Enappd. All rights reserved.
    *
    * This source code is licensed as per the terms found in the
    * LICENSE.md file in the root directory of this source tree.
    */


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__["EmailComposer"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"]
      }, _home_service__WEBPACK_IMPORTED_MODULE_9__["Data"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].config), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
          entryComponents: [],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].config), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"]],
          providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__["EmailComposer"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"], {
            provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"],
            useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"]
          }, _home_service__WEBPACK_IMPORTED_MODULE_9__["Data"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home.service.ts":
  /*!*********************************!*\
    !*** ./src/app/home.service.ts ***!
    \*********************************/

  /*! exports provided: Data */

  /***/
  function srcAppHomeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Data", function () {
      return Data;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/add/operator/filter */
    "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");

    var Data =
    /*#__PURE__*/
    function () {
      function Data() {
        _classCallCheck(this, Data);

        this.jsonData = [{
          "id": 1,
          "label": "Entradas",
          "name": "Entradas",
          "url": "entradas"
        }, {
          "id": 3,
          "label": "Tablas",
          "name": "Tablas",
          "url": "tablas"
        }, {
          "id": 3,
          "label": "Platos",
          "name": "Platos",
          "url": "platos"
        }, {
          "id": 3,
          "label": "Pastas",
          "name": "Pastas",
          "url": "pastas"
        }, {
          "id": 3,
          "label": "Minutas",
          "name": "Minutas",
          "url": "minuta"
        }, {
          "id": 3,
          "label": "Pizzas",
          "name": "Pizzas",
          "url": "pizzas"
        }, {
          "id": 3,
          "label": "Hamburguesas",
          "name": "Hamburguesas",
          "url": "burger"
        }, {
          "id": 3,
          "label": "Lomitos",
          "name": "Lomitos",
          "url": "lomos"
        }, {
          "id": 3,
          "label": "Parrillada",
          "name": "Parrillada",
          "url": "parrilla"
        }, {
          "id": 3,
          "label": "Tacos",
          "name": "Tacos",
          "url": "tacos"
        }, {
          "id": 3,
          "label": "Fajitas",
          "name": "Fajitas",
          "url": "fajitas"
        }, {
          "id": 3,
          "label": "Fried Chicken",
          "name": "Fried Chicken",
          "url": "fchicken"
        }, {
          "id": 3,
          "label": "Sandwiches",
          "name": "Sandwiches",
          "url": "sandwichs"
        }, {
          "id": 3,
          "label": "Ensaladas",
          "name": "Ensaladas",
          "url": "ensaladas"
        }, {
          "id": 3,
          "label": "Rock Kids",
          "name": "Rock Kids",
          "url": "rkids"
        }, {
          "id": 3,
          "label": "Postres",
          "name": "Postres",
          "url": "postres"
        }];
        this.jsonData2 = [{
          "id": 1,
          "label": "Misiles Tank",
          "name": "Misiles Tank",
          "url": "misilestank"
        }, {
          "id": 2,
          "label": "Cervezas Tiradas",
          "name": "Cervezas Tiradas",
          "url": "cervezatirada"
        }, {
          "id": 3,
          "label": "Super Balòn",
          "name": "Super Balòn",
          "url": "superbalon"
        }, {
          "id": 3,
          "label": "Cocteleria",
          "name": "Cocteleria",
          "url": "cocteleria"
        }, {
          "id": 3,
          "label": "De Autor",
          "name": "De Autor",
          "url": "deautor"
        }, {
          "id": 3,
          "label": "Clàsicos",
          "name": "Clàsicos",
          "url": "csabor"
        }, {
          "id": 3,
          "label": "Gin Tonic",
          "name": "Gin Tonic",
          "url": "gintonic"
        }, {
          "id": 3,
          "label": "Whiskys",
          "name": "Whiskys",
          "url": "whiskys"
        }, {
          "id": 3,
          "label": "Espirituosos",
          "name": "Espirituosos",
          "url": "espirituosos"
        }, {
          "id": 3,
          "label": "Energizantes",
          "name": "Energizantes",
          "url": "energizantes"
        }, {
          "id": 3,
          "label": "Espumantes",
          "name": "Espumantes",
          "url": "espumantes"
        }, {
          "id": 3,
          "label": "Otros",
          "name": "Otros",
          "url": "other"
        }];
      }

      _createClass(Data, [{
        key: "filterItems",
        value: function filterItems(searchTerm) {
          return this.jsonData.filter(function (item) {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase());
          });
        }
      }, {
        key: "filterItems2",
        value: function filterItems2(searchTerm2) {
          return this.jsonData2.filter(function (item) {
            return item.name.toLowerCase().includes(searchTerm2.toLowerCase());
          });
        }
      }]);

      return Data;
    }();

    Data.ɵfac = function Data_Factory(t) {
      return new (t || Data)();
    };

    Data.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Data,
      factory: Data.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Data, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: true,
      config: {
        apiKey: "AIzaSyBcwcJOw-pEQa4F-3EfVXxCz2gysCx0keU",
        authDomain: "full-firebase-ionic4.firebaseapp.com",
        databaseURL: "https://full-firebase-ionic4.firebaseio.com",
        projectId: "full-firebase-ionic4",
        storageBucket: "full-firebase-ionic4.appspot.com",
        messagingSenderId: "1090501687137",
        appId: "1:1090501687137:web:1be2f4b447f39351"
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Nicolas\Documents\rmb\ionic-4-firebase-auth-master\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map