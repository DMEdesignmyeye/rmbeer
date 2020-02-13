import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.page.html',
  styleUrls: ['./burger.page.scss'],
})
export class BurgerPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Hamburguesa Completa',
      message: 'Lechuga, tomate, mayonesa al ajo, queso, hamburguesa casera.',
            buttons: ['Cerrar'],
    });
      
    await alert.present();
  }
  async showAlert2() {
    const alert = await this.alertController.create({
      header: 'Hamburguesa Completa',
      message: 'Lechuga, tomate, mayonesa al ajo, queso, jamón, huevo, hamburguesa casera.',
            buttons: ['Cerrar'],
    });

    await alert.present();
  }
  async showAlert3() {
    const alert = await this.alertController.create({
      header: 'Hamburguesa Mick Jagger',
      message: 'Lechuga, tomate, mayonesa al ajo, queso, jamón, huevo, bacon, cebolla morada, queso cheddar, hamburguesa casera.',
            buttons: ['Cerrar'],
    });

    await alert.present();
  }
  async showAlert4() {
    const alert = await this.alertController.create({
      header: 'Hamburguesa Rock Me Beer',
      message: 'Lechuga, tomate, mayonesa al ajo, queso, jamón, huevo, bacon, cebolla morada, 2 hamburguesas caseras en colchón de muzzarella.',
            buttons: ['Cerrar'],
    });

    await alert.present();
  }
  async showAlert5() {
    const alert = await this.alertController.create({
      header: 'Hamburguesa Rock Me Beer XL',
      message: 'Lechuga, tomate, queso, jamón, huevo, bacon, hamburguesa casera de 180Grs.',
            buttons: ['Cerrar'],
    });

    await alert.present();
  }
  
  async showAlert6() {
    const alert = await this.alertController.create({
      header: 'Hamburguesa ENDIABLADA',
      message: 'Lechuga, tomate, mayonesa casera, guacamole, salsa de pico de gallo, queso, jamón,hamburguesa casera de 125Grs. (Opcional: Ají Jalapeño).',
            buttons: ['Cerrar'],
    });

    await alert.present();
  }
}
