import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.page.html',
  styleUrls: ['./postres.page.scss'],
})
export class PostresPage implements OnInit {


  constructor(public alertController: AlertController) { }


  ngOnInit() {
  }
 

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Flan Casero',
      message: 'Flan Casero.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }

  async showAlert2() {
    const alert = await this.alertController.create({
      header: 'Macedonia',
      message: 'Macedonia.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }

  async showAlert4() {
    const alert = await this.alertController.create({
      header: 'Helado',
      message: 'Helado (2 Bochas).',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }
  async showAlert5() {
    const alert = await this.alertController.create({
      header: 'Bombón Escocés',
      message: 'Bombón Escocés.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }
    
    
  async showAlert6() {
    const alert = await this.alertController.create({
      header: 'Ensalada De Frutas',
      message: 'Ensalada De Frutas.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }
  async showAlert7() {
    const alert = await this.alertController.create({
      header: 'Brownie con helado',
      message: 'Brownie con helado de crema americana.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }
  async showAlert8() {
    const alert = await this.alertController.create({
      header: 'Creps Con Dulce de Leche',
      message: 'Creps con dulce de leche y Crema Chantilly.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }
}