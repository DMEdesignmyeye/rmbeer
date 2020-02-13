function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agenda-agenda-module"], {
  /***/
  "./src/app/agenda/agenda-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/agenda/agenda-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: AgendaPageRoutingModule */

  /***/
  function srcAppAgendaAgendaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgendaPageRoutingModule", function () {
      return AgendaPageRoutingModule;
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


    var _agenda_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./agenda.page */
    "./src/app/agenda/agenda.page.ts");

    var routes = [{
      path: '',
      component: _agenda_page__WEBPACK_IMPORTED_MODULE_2__["AgendaPage"]
    }];

    var AgendaPageRoutingModule = function AgendaPageRoutingModule() {
      _classCallCheck(this, AgendaPageRoutingModule);
    };

    AgendaPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AgendaPageRoutingModule
    });
    AgendaPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AgendaPageRoutingModule_Factory(t) {
        return new (t || AgendaPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AgendaPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgendaPageRoutingModule, [{
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
  "./src/app/agenda/agenda.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/agenda/agenda.module.ts ***!
    \*****************************************/

  /*! exports provided: AgendaPageModule */

  /***/
  function srcAppAgendaAgendaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgendaPageModule", function () {
      return AgendaPageModule;
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


    var _agenda_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./agenda-routing.module */
    "./src/app/agenda/agenda-routing.module.ts");
    /* harmony import */


    var _agenda_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./agenda.page */
    "./src/app/agenda/agenda.page.ts");

    var AgendaPageModule = function AgendaPageModule() {
      _classCallCheck(this, AgendaPageModule);
    };

    AgendaPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AgendaPageModule
    });
    AgendaPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AgendaPageModule_Factory(t) {
        return new (t || AgendaPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _agenda_routing_module__WEBPACK_IMPORTED_MODULE_4__["AgendaPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AgendaPageModule, {
        declarations: [_agenda_page__WEBPACK_IMPORTED_MODULE_5__["AgendaPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _agenda_routing_module__WEBPACK_IMPORTED_MODULE_4__["AgendaPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgendaPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _agenda_routing_module__WEBPACK_IMPORTED_MODULE_4__["AgendaPageRoutingModule"]],
          declarations: [_agenda_page__WEBPACK_IMPORTED_MODULE_5__["AgendaPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/agenda/agenda.page.ts":
  /*!***************************************!*\
    !*** ./src/app/agenda/agenda.page.ts ***!
    \***************************************/

  /*! exports provided: AgendaPage */

  /***/
  function srcAppAgendaAgendaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgendaPage", function () {
      return AgendaPage;
    });
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AgendaPage =
    /*#__PURE__*/
    function () {
      function AgendaPage(actionSheetController, router, alertController) {
        _classCallCheck(this, AgendaPage);

        this.actionSheetController = actionSheetController;
        this.router = router;
        this.alertController = alertController;
        this.slideOpts = {
          effect: 'cube',
          initialSlide: 0,
          speed: 300,
          direction: 'horizontal',
          loop: true
        };
      }

      _createClass(AgendaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // async presentAlertConfirm() {
        //   const alert = await this.alertController.create({
        //     header: 'LLamar a Rock Me Beer?',
        //     message: 'Desea LLamar a Rock Me Beer?', 
        //     buttons: [
        //       {
        //         text: 'Cancelar',
        //         role: 'cancel',
        //         cssClass: 'secondary',
        //         handler: (blah) => {
        //           console.log('Confirm Cancel: blah');
        //         }
        //       }, {
        //         text: 'Cerrar',
        //         handler: () => { 
        //           console.log('Confirm Okay');
        //         }
        //       }
        //     ]
        //   });
        //   await alert.present();
        // }

      }, {
        key: "getLinkWhastapp",
        value: function getLinkWhastapp() {
          var number = 543541215268;
          var message = 'Buenas, Qusiera hacer una reserva para el dia /11/2019  , la cantidad de personas es ( ), el horario seria a las: :00 y a nombre de: (    )  Muchas Gracias!';
          window.open('https://api.whatsapp.com/send?phone=' + number + '&text=%20' + message, '_system');
        }
      }, {
        key: "presentActionSheet",
        value: function presentActionSheet() {
          var _this = this;

          this.actionSheet = this.actionSheetController.create({
            header: 'RockMeBeer',
            buttons: [{
              text: 'Reservar',
              role: 'destructive',
              icon: 'clipboard',
              handler: function handler() {
                _this.getLinkWhastapp();

                console.log('Delete clicked');
              }
            }, {
              text: 'Llamar',
              icon: 'call',
              handler: function handler() {
                window.open('tel:543541215268');
              }
            }, {
              text: 'Cancelar',
              icon: 'close',
              role: 'cancel',
              handler: function handler() {
                console.log('Cancel clicked');
              }
            }]
          }).then(function (actionsheet) {
            actionsheet.present();
          });
        }
      }, {
        key: "presentActionSheet2",
        value: function presentActionSheet2() {
          this.actionSheet = this.actionSheetController.create({
            header: 'RockMeBeer',
            buttons: [{
              text: 'Reservar',
              role: 'destructive',
              icon: 'clipboard',
              handler: function handler() {
                window.open('https://wa.me/543541215268', '_system');
              }
            }, {
              text: 'Cancelar',
              icon: 'close',
              role: 'cancel',
              handler: function handler() {
                console.log('Cancel clicked');
              }
            }]
          }).then(function (actionsheet) {
            actionsheet.present();
          });
        }
      }]);

      return AgendaPage;
    }();

    AgendaPage.ɵfac = function AgendaPage_Factory(t) {
      return new (t || AgendaPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["AlertController"]));
    };

    AgendaPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AgendaPage,
      selectors: [["app-agenda"]],
      decls: 13,
      vars: 1,
      consts: [["center", ""], ["src", "../../assets/img/rmblogo.png", 1, "img-logo", 2, "width", "100%", "height", "22%", "margin-bottom", "0px", "margin-top", "33px"], ["text-center", "", 2, "color", "white !important", "margin-top", "-12px"], ["pager", "true", 3, "options"], ["src", "../../assets/img/agenda/1.jpg", 3, "click"], ["src", "../../assets/img/agenda/2.jpg", 3, "click"], ["src", "../../assets/img/agenda/3.jpg", 3, "click"], ["expand", "full", "color", "light", 3, "click"]],
      template: function AgendaPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "EVENTOS DICIEMBRE");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-slides", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AgendaPage_Template_img_click_6_listener($event) {
            return ctx.presentActionSheet2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AgendaPage_Template_img_click_8_listener($event) {
            return ctx.presentActionSheet2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AgendaPage_Template_img_click_10_listener($event) {
            return ctx.presentActionSheet2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AgendaPage_Template_ion_button_click_11_listener($event) {
            return ctx.presentActionSheet();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Hacer Reserva ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.slideOpts);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["CssUtilsDeprecations"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FnZW5kYS9hZ2VuZGEucGFnZS5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgendaPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-agenda',
          templateUrl: './agenda.page.html',
          styleUrls: ['./agenda.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ActionSheetController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["AlertController"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=agenda-agenda-module-es5.js.map