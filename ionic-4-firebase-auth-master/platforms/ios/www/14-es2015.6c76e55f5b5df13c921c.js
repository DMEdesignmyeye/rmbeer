(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{hejP:function(e,t,c){"use strict";c.r(t);var n=c("ofXK"),o=c("3Pt+"),i=c("c7TG"),r=c("tyNb"),s=c("fXoL");const a=[{path:"",component:(()=>{class e{constructor(e,t,c){this.actionSheetController=e,this.router=t,this.alertController=c,this.slideOpts={effect:"cube",initialSlide:0,speed:300,direction:"horizontal",loop:!0}}ngOnInit(){}getLinkWhastapp(){window.open("https://api.whatsapp.com/send?phone=543541215268&text=%20Buenas, Qusiera hacer una reserva para el dia /11/2019  , la cantidad de personas es ( ), el horario seria a las: :00 y a nombre de: (    )  Muchas Gracias!","_system")}presentActionSheet(){this.actionSheet=this.actionSheetController.create({header:"RockMeBeer",buttons:[{text:"Reservar",role:"destructive",icon:"clipboard",handler:()=>{this.getLinkWhastapp(),console.log("Delete clicked")}},{text:"Llamar",icon:"call",handler:()=>{window.open("tel:543541215268")}},{text:"Cancelar",icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked")}}]}).then(e=>{e.present()})}presentActionSheet2(){this.actionSheet=this.actionSheetController.create({header:"RockMeBeer",buttons:[{text:"Reservar",role:"destructive",icon:"clipboard",handler:()=>{window.open("https://wa.me/543541215268","_system")}},{text:"Cancelar",icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked")}}]}).then(e=>{e.present()})}}return e.\u0275fac=function(t){return new(t||e)(s.Xb(i.a),s.Xb(r.g),s.Xb(i.b))},e.\u0275cmp=s.Rb({type:e,selectors:[["app-agenda"]],decls:13,vars:1,consts:[["center",""],["src","../../assets/img/rmblogo.png",1,"img-logo",2,"width","100%","height","22%","margin-bottom","0px","margin-top","33px"],["text-center","",2,"color","white !important","margin-top","-12px"],["pager","true",3,"options"],["src","../../assets/img/agenda/1.jpg",3,"click"],["src","../../assets/img/agenda/2.jpg",3,"click"],["src","../../assets/img/agenda/3.jpg",3,"click"],["expand","full","color","light",3,"click"]],template:function(e,t){1&e&&(s.cc(0,"ion-content",0),s.Yb(1,"img",1),s.cc(2,"h2",2),s.xc(3,"EVENTOS DICIEMBRE"),s.bc(),s.cc(4,"ion-slides",3),s.cc(5,"ion-slide"),s.cc(6,"img",4),s.kc("click",(function(e){return t.presentActionSheet2()})),s.bc(),s.bc(),s.cc(7,"ion-slide"),s.cc(8,"img",5),s.kc("click",(function(e){return t.presentActionSheet2()})),s.bc(),s.bc(),s.cc(9,"ion-slide"),s.cc(10,"img",6),s.kc("click",(function(e){return t.presentActionSheet2()})),s.bc(),s.bc(),s.bc(),s.cc(11,"ion-button",7),s.kc("click",(function(e){return t.presentActionSheet()})),s.xc(12," Hacer Reserva "),s.bc(),s.bc()),2&e&&(s.Nb(4),s.pc("options",t.slideOpts))},directives:[i.p,i.d,i.I,i.H,i.g],styles:[""]}),e})()}];let l=(()=>{class e{}return e.\u0275mod=s.Vb({type:e}),e.\u0275inj=s.Ub({factory:function(t){return new(t||e)},imports:[[r.i.forChild(a)],r.i]}),e})();c.d(t,"AgendaPageModule",(function(){return p}));let p=(()=>{class e{}return e.\u0275mod=s.Vb({type:e}),e.\u0275inj=s.Ub({factory:function(t){return new(t||e)},imports:[[n.b,o.f,i.P,l]]}),e})()}}]);