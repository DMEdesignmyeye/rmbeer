function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function asyncGeneratorStep(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(d){return void n(d)}s.done?e(c):Promise.resolve(c).then(r,o)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){asyncGeneratorStep(i,r,o,a,s,"next",t)}function s(t){asyncGeneratorStep(i,r,o,a,s,"throw",t)}a(void 0)}))}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{"Y/uG":function(t,e,n){"use strict";n.r(e),n.d(e,"ion_toast",(function(){return p}));var r=n("dSyh"),o=(n("AfW+"),n("aiEM"),n("+4pY")),i=n("pori"),a=n("Dl6n"),s=n("YtD4"),c=function(t,e){var n=Object(o.a)(),r=Object(o.a)(),i=t.host||t,a=t.querySelector(".toast-wrapper");switch(r.addElement(a),e){case"top":r.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":var s=Math.floor(i.clientHeight/2-a.clientHeight/2);a.style.top="".concat(s,"px"),r.fromTo("opacity",.01,1);break;default:r.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return n.addElement(i).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(r)},d=function(t,e){var n=Object(o.a)(),r=Object(o.a)(),i=t.host||t,a=t.querySelector(".toast-wrapper");switch(r.addElement(a),e){case"top":r.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":r.fromTo("opacity",.99,0);break;default:r.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return n.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(r)},l=function(t,e){var n=Object(o.a)(),r=Object(o.a)(),i=t.host||t,a=t.querySelector(".toast-wrapper");switch(r.addElement(a),e){case"top":a.style.top="calc(8px + var(--ion-safe-area-top, 0px))",r.fromTo("opacity",.01,1);break;case"middle":var s=Math.floor(i.clientHeight/2-a.clientHeight/2);a.style.top="".concat(s,"px"),r.fromTo("opacity",.01,1);break;default:a.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",r.fromTo("opacity",.01,1)}return n.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(r)},u=function(t){var e=Object(o.a)(),n=Object(o.a)(),r=t.host||t,i=t.querySelector(".toast-wrapper");return n.addElement(i).fromTo("opacity",.99,0),e.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)},p=function(){function t(e){_classCallCheck(this,t),Object(r.l)(this,e),this.presented=!1,this.mode=Object(r.e)(this),this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0,Object(i.e)(this.el),this.didPresent=Object(r.d)(this,"ionToastDidPresent",7),this.willPresent=Object(r.d)(this,"ionToastWillPresent",7),this.willDismiss=Object(r.d)(this,"ionToastWillDismiss",7),this.didDismiss=Object(r.d)(this,"ionToastDidDismiss",7)}var e,n,o;return _createClass(t,[{key:"present",value:(o=_asyncToGenerator(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.f)(this,"toastEnter",c,l,this.position);case 2:this.duration>0&&(this.durationTimeout=setTimeout((function(){return e.dismiss(void 0,"timeout")}),this.duration));case 3:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"dismiss",value:function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(i.g)(this,t,e,"toastLeave",d,u,this.position)}},{key:"onDidDismiss",value:function(){return Object(i.h)(this.el,"ionToastDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(i.h)(this.el,"ionToastWillDismiss")}},{key:"getButtons",value:function(){var t=this,e=this.buttons?this.buttons.map((function(t){return"string"==typeof t?{text:t}:t})):[];return this.showCloseButton&&e.push({text:this.closeButtonText||"Close",handler:function(){return t.dismiss(void 0,"cancel")}}),e}},{key:"buttonClick",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.role,!Object(i.j)(n)){t.next=5;break}t.t0=this.dismiss(void 0,n),t.next=13;break;case 5:return t.next=7,this.callButtonHandler(e);case 7:if(!t.sent){t.next=11;break}t.t1=this.dismiss(void 0,e.role),t.next=12;break;case 11:t.t1=Promise.resolve();case 12:t.t0=t.t1;case 13:return t.abrupt("return",t.t0);case 14:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"callButtonHandler",value:(e=_asyncToGenerator(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!e.handler){t.next=13;break}return t.prev=1,t.t0=!1,t.next=5,Object(i.p)(e.handler);case 5:if(t.t1=t.sent,t.t0!==t.t1){t.next=8;break}return t.abrupt("return",!1);case 8:t.next=13;break;case 10:t.prev=10,t.t2=t.catch(1),console.error(t.t2);case 13:return t.abrupt("return",!0);case 14:case"end":return t.stop()}}),t,null,[[1,10]])}))),function(t){return e.apply(this,arguments)})},{key:"renderButtons",value:function(t,e){var n=this;if(0!==t.length){var o=Object(r.e)(this),i=_defineProperty({"toast-button-group":!0},"toast-button-group-".concat(e),!0);return Object(r.i)("div",{class:i},t.map((function(t){return Object(r.i)("button",{type:"button",class:b(t),tabIndex:0,onClick:function(){return n.buttonClick(t)}},Object(r.i)("div",{class:"toast-button-inner"},t.icon&&Object(r.i)("ion-icon",{icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===o&&Object(r.i)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))})))}}},{key:"render",value:function(){var t=this.getButtons(),e=t.filter((function(t){return"start"===t.side})),n=t.filter((function(t){return"start"!==t.side})),o=Object(r.e)(this),i=_defineProperty({"toast-wrapper":!0},"toast-".concat(this.position),!0);return Object(r.i)(r.a,{style:{zIndex:"".concat(6e4+this.overlayIndex)},class:Object.assign(Object.assign(Object.assign(_defineProperty({},o,!0),Object(a.a)(this.color)),Object(a.b)(this.cssClass)),{"toast-translucent":this.translucent})},Object(r.i)("div",{class:i},Object(r.i)("div",{class:"toast-container"},this.renderButtons(e,"start"),Object(r.i)("div",{class:"toast-content"},void 0!==this.header&&Object(r.i)("div",{class:"toast-header"},this.header),void 0!==this.message&&Object(r.i)("div",{class:"toast-message",innerHTML:Object(s.a)(this.message)})),this.renderButtons(n,"end"))))}},{key:"el",get:function(){return Object(r.f)(this)}}],[{key:"style",get:function(){return":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800,#333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-50,#f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:.01;z-index:10}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-header,.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100,#e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover:hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb,56,128,255),.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.08)}}"}}]),t}(),b=function(t){var e;return Object.assign((_defineProperty(e={"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text},"toast-button-".concat(t.role),void 0!==t.role),_defineProperty(e,"ion-focusable",!0),_defineProperty(e,"ion-activatable",!0),e),Object(a.b)(t.cssClass))}}}]);