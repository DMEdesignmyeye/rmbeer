
 import { ActionSheetController } from '@ionic/angular'; 
import { Component, OnInit, Input } from '@angular/core'; 

import { AlertController } from '@ionic/angular'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  actionSheet:any;  
  dataFromModal;
  pushPage: any;

  constructor(public actionSheetController: ActionSheetController, private router: Router, public alertController: AlertController) {}
  slideOpts = { effect: 'cube', initialSlide: 0, speed: 300, direction: 'horizontal', loop: true };

  ngOnInit() {
  }   



  // async presentAlertConfirm() {
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
  getLinkWhastapp() {
   var number = 543541215268;
    var message = 'Buenas, Qusiera hacer una reserva para el dia /11/2019  , la cantidad de personas es ( ), el horario seria a las: :00 y a nombre de: (    )  Muchas Gracias!'; 
    window.open('https://api.whatsapp.com/send?phone=' + number + '&text=%20' + message, '_system');
  }

  presentActionSheet() {
    this.actionSheet = this.actionSheetController.create({
      header: 'RockMeBeer',
      buttons: [{ 
        text: 'Reservar',
        role: 'destructive',
        icon: 'clipboard', 
        handler: () => {
          

          this.getLinkWhastapp();
 
          console.log('Delete clicked');
        }
      }, {
        text: 'Llamar',
        icon: 'call',
        handler: () => {
         window.open('tel:543541215268'); 
        } 
      },  {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    }).then(actionsheet => {
      actionsheet.present();
    });
  } 
  presentActionSheet2() {
    this.actionSheet = this.actionSheetController.create({
      header: 'RockMeBeer',
      buttons: [{ 
        text: 'Reservar',
        role: 'destructive',
        icon: 'clipboard', 
        handler: () => {
           window.open('https://wa.me/543541215268', '_system');
         }
      },  {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    }).then(actionsheet => {
      actionsheet.present();
    });
  } 
}