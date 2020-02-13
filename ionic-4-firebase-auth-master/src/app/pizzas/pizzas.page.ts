import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.page.html',
  styleUrls: ['./pizzas.page.scss'],
})
export class PizzasPage implements OnInit {


  constructor(public alertController: AlertController) { }


  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Muzzarella Clasic',
      message: 'Muzzarella, aceituna verde.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }

  async showAlert2() {
    const alert = await this.alertController.create({
      header: 'Napolitana',
      message: 'Muzzarella, tomate, ajo, aceitunas.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }

  async showAlert3() {
    const alert = await this.alertController.create({
      header: 'Napolitana Especial',
      message: 'Muzzarella, tomate, jamón, morrones, aceitunas.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }

  async showAlert4() {
    const alert = await this.alertController.create({
      header: 'Especiál',
      message: 'Muzzarella, jamón, morrones, aceitunas negras.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }
  async showAlert5() {
    const alert = await this.alertController.create({
      header: 'Especiál con Anchoas',
      message: 'Muzzarella, jamón, morrones, aceitunas negras, anchoas.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }


  async showAlert6() {
    const alert = await this.alertController.create({
      header: 'Fugazzeta',
      message: 'Muzzarella, cebollas braseadas, aceitunas negras.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }
  async showAlert7() {
    const alert = await this.alertController.create({
      header: 'Calabresa',
      message: 'Muzzarella, salame de la colonia, ají molido.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }

  async showAlert8() {
    const alert = await this.alertController.create({
      header: 'Muzzarella & Blue Chesse',
      message: 'Muzzarella, roquefort.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }

  async showAlert9() {
    const alert = await this.alertController.create({
      header: 'Tropical',
      message: 'Muzzarella, jamón, ananá, azúcar negra, cerezas.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }

  async showAlert10() {
    const alert = await this.alertController.create({
      header: 'Rúcula',
      message: 'Muzzarella, rúcula, jamón crudo, queso parmesano, aceitunas negras.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }

  async showAlert11() {
    const alert = await this.alertController.create({
      header: 'Especial Palmitos',
      message: 'Muzzarella, jamón, palmitos, salsa golf, aceitunas.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }

  async showAlert12() {
    const alert = await this.alertController.create({
      header: 'Rock Me Beer',
      message: 'Muzzarella, queso cheddar, huevos fritos, bacon, cebolla de verdeo, aceitunas negras.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }
  ngOnInit() {
  }

}
