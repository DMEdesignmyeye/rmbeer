(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{zdCf:function(i,e,s){"use strict";s.r(e);var c=s("ofXK"),n=s("3Pt+"),t=s("c7TG"),a=s("tyNb"),l=s("fXoL");const d=["slideWithNav"],r=["slideWithNav2"],o=["slideWithNav3"];function g(i,e){if(1&i&&(l.cc(0,"ion-slide"),l.Yb(1,"img",17),l.bc()),2&i){const i=e.$implicit;l.Nb(1),l.qc("src","../../assets/img/menu/",i.id,".jpg",l.uc)}}const m=[{path:"",component:(()=>{class i{constructor(){this.slideOptsOne={initialSlide:0,slidesPerView:2,loop:!0,autoplay:!0},this.slideOptsTwo={initialSlide:1,slidesPerView:2,loop:!0,centeredSlides:!0},this.slideOptsThree={initialSlide:0,slidesPerView:3},this.sliderOne={isBeginningSlide:!0,isEndSlide:!1,slidesItems:[{id:1,image:"../../assets/img/menu/1.jpg"},{id:2,image:"../../assets/img/menu/2.jpg"},{id:3,image:"../../assets/img/menu/3.jpg"},{id:4,image:"../../assets/img/menu/4.jpg"}]},this.sliderTwo={isBeginningSlide:!0,isEndSlide:!1,slidesItems:[{id:6,image:"../../assets/img/menu/tra/1.jpg"},{id:7,image:"../../assets/img/menu/tra/2.jpg"},{id:8,image:"../../assets/img/menu/tra/3.jpg"},{id:9,image:"../../assets/img/menu/tra/4.jpg"},{id:10,image:"../../assets/img/menu/tra/1.jpg"}]},this.sliderThree={isBeginningSlide:!0,isEndSlide:!1,slidesItems:[{id:11,image:"../../assets/img/menu/tra/1.jpg"},{id:12,image:"../../assets/img/menu/tra/2.jpg"},{id:13,image:"../../assets/img/menu/tra/3.jpg"},{id:14,image:"../../assets/img/menu/tra/4.jpg"},{id:15,image:"../../assets/img/menu/tra/1.jpg"}]}}ngOnInit(){}slideNext(i,e){e.slideNext(500).then(()=>{this.checkIfNavDisabled(i,e)})}slidePrev(i,e){e.slidePrev(500).then(()=>{this.checkIfNavDisabled(i,e)})}SlideDidChange(i,e){this.checkIfNavDisabled(i,e)}checkIfNavDisabled(i,e){this.checkisBeginning(i,e),this.checkisEnd(i,e)}checkisBeginning(i,e){e.isBeginning().then(e=>{i.isBeginningSlide=e})}checkisEnd(i,e){e.isEnd().then(e=>{i.isEndSlide=e})}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=l.Rb({type:i,selectors:[["app-misilestank"]],viewQuery:function(i,e){var s;1&i&&(l.Ac(d,!0),l.Ac(r,!0),l.Ac(o,!0)),2&i&&(l.rc(s=l.lc())&&(e.slideWithNav=s.first),l.rc(s=l.lc())&&(e.slideWithNav2=s.first),l.rc(s=l.lc())&&(e.slideWithNav3=s.first))},decls:40,vars:6,consts:[["fullscreen",""],[2,"color","white !important","font-size","18px"],["size","8"],[1,"slider-nav","arrow-prev",3,"click"],[1,"prev-icon-custom","custon-nav"],["size","16"],["pager","true",3,"options","ionSlideDidChange"],["slideWithNav",""],[4,"ngFor","ngForOf"],[1,"slider-nav","arrow-next",3,"click"],[1,"next-icon-custom","custon-nav"],[2,"color","white !important","font-size","16px"],["slot","start"],["src","../../assets/img/menu/misil.jpg"],[2,"color","white !important"],["src","../../assets/img/menu/misil2.jpg"],["src","../../assets/img/menu/misil3.jpg"],[3,"src"]],template:function(i,e){if(1&i){const i=l.dc();l.cc(0,"ion-content",0),l.cc(1,"ion-card"),l.cc(2,"ion-card-header"),l.cc(3,"ion-card-title",1),l.xc(4,"Misiles Tank"),l.bc(),l.bc(),l.bc(),l.cc(5,"ion-grid"),l.cc(6,"ion-row"),l.cc(7,"ion-col",2),l.cc(8,"span",3),l.kc("click",(function(s){l.tc(i);const c=l.sc(12);return e.slidePrev(e.sliderOne,c)})),l.Yb(9,"div",4),l.bc(),l.bc(),l.cc(10,"ion-col",5),l.cc(11,"ion-slides",6,7),l.kc("ionSlideDidChange",(function(s){l.tc(i);const c=l.sc(12);return e.SlideDidChange(e.sliderOne,c)})),l.wc(13,g,2,1,"ion-slide",8),l.bc(),l.bc(),l.cc(14,"ion-col",2),l.cc(15,"span",9),l.kc("click",(function(s){l.tc(i);const c=l.sc(12);return e.slideNext(e.sliderOne,c)})),l.Yb(16,"div",10),l.bc(),l.bc(),l.bc(),l.bc(),l.cc(17,"ion-card"),l.cc(18,"ion-card-header"),l.cc(19,"ion-card-subtitle",11),l.xc(20,"Misiles Tank"),l.bc(),l.bc(),l.cc(21,"ion-list"),l.cc(22,"ion-item"),l.cc(23,"ion-avatar",12),l.Yb(24,"img",13),l.bc(),l.cc(25,"ion-label",14),l.cc(26,"h2",14),l.xc(27,"Misil 1"),l.bc(),l.bc(),l.bc(),l.cc(28,"ion-item"),l.cc(29,"ion-avatar",12),l.Yb(30,"img",15),l.bc(),l.cc(31,"ion-label",14),l.cc(32,"h2",14),l.xc(33,"Misil 2 "),l.bc(),l.bc(),l.bc(),l.cc(34,"ion-item"),l.cc(35,"ion-avatar",12),l.Yb(36,"img",16),l.bc(),l.cc(37,"ion-label",14),l.cc(38,"h2",14),l.xc(39,"Misil 3 "),l.bc(),l.bc(),l.bc(),l.bc(),l.bc(),l.bc()}2&i&&(l.Nb(9),l.Pb("disabled",e.sliderOne.isBeginningSlide),l.Nb(2),l.pc("options",e.slideOptsOne),l.Nb(2),l.pc("ngForOf",e.sliderOne.slidesItems),l.Nb(3),l.Pb("disabled",e.sliderOne.isEndSlide))},directives:[t.p,t.i,t.k,t.m,t.t,t.D,t.o,t.I,c.h,t.l,t.z,t.x,t.f,t.y,t.H],styles:[""]}),i})()}];let b=(()=>{class i{}return i.\u0275mod=l.Vb({type:i}),i.\u0275inj=l.Ub({factory:function(e){return new(e||i)},imports:[[a.i.forChild(m)],a.i]}),i})();s.d(e,"MisilestankPageModule",(function(){return p}));let p=(()=>{class i{}return i.\u0275mod=l.Vb({type:i}),i.\u0275inj=l.Ub({factory:function(e){return new(e||i)},imports:[[c.b,n.f,t.P,b]]}),i})()}}]);