import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

 @Component({
  selector: 'app-rabas',
  templateUrl: './rabas.page.html',
  styleUrls: ['./rabas.page.scss'],
})
export class RabasPage implements OnInit {

  constructor(public alertController: AlertController) { }


  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Rabas Rebozadas',
      message: 'Rabas Rebozadas, Limón.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }

  async showAlert2() {
    const alert = await this.alertController.create({
      header: 'Combinado Italiano',
      message: 'Jamón crudo, muzzarella, morrón, albahaca y olivas negras.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }

  async showAlert3() {
    const alert = await this.alertController.create({
      header: 'Bastónes de muzzarella',
      message: 'Bastónes de muzzarella, sobre colchón de salsa Rock Me Beer.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }

  async showAlert4() {
    const alert = await this.alertController.create({
      header: 'Nachos con Cheddar',
      message: 'Nachos con Cheddar.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }
  async showAlert5() {
    const alert = await this.alertController.create({
      header: 'Wrap Vegetariano',
      message: 'Rollo de vegetales salteados.',
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
