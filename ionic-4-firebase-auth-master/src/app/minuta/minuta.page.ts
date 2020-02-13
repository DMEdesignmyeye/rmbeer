import { Component, OnInit } from '@angular/core';  
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-minuta',
  templateUrl: './minuta.page.html',
  styleUrls: ['./minuta.page.scss'],
})
export class MinutaPage implements OnInit {



  constructor(public alertController: AlertController) { }


  async showAlert() {
    const alert = await this.alertController.create({
      header: 'A Caballo',
      message: 'Con guarnición (huevos fritos y perejíl).',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }

  async showAlert2() {
    const alert = await this.alertController.create({
      header: 'Fugazzeta',
      message: 'Con guarnición (Muzzarella, cebolla asada, orégano).',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }

  async showAlert3() {
    const alert = await this.alertController.create({
      header: 'Rock Me Beer',
      message: 'Con guarnición (Muzzarella, huevo frito, cheddar, bacon, cebolla de verdeo.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }

  async showAlert4() {
    const alert = await this.alertController.create({
      header: '4 Quesos',
      message: 'Con guarnición (Muzzarella, parmesano, tybo, blue chesse.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }
  async showAlert5() {
    const alert = await this.alertController.create({
      header: 'Rúcula',
      message: 'Con guarnición (Muzzarella, rúcula, jamón crudo, parmesano, olivias negras).',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }

  async showAlert6() {
    const alert = await this.alertController.create({
      header: 'Wrap de Pollo',
      message: 'Rollo de Pollo y vegetales salteados.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }
  ngOnInit() {
  }

}
