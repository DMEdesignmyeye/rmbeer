import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sandwichs',
  templateUrl: './sandwichs.page.html',
  styleUrls: ['./sandwichs.page.scss'],
})
export class SandwichsPage implements OnInit {
  constructor(public alertController: AlertController) { }



    async showAlert() {
      const alert = await this.alertController.create({
        header: 'Sandwich Simple',
        message: 'Bife de ternera prensada, lechuga, tomate, mayonesa al ajo, queso.',
              buttons: ['Cerrar'],
      });
        
      await alert.present();
    }
    async showAlert2() {
      const alert = await this.alertController.create({
        header: 'Sandwich Completo',
        message: 'Bife de ternera prensada, lechuga, tomate, mayonesa al ajo, queso, jamón, huevo, hamburguesa casera.',
              buttons: ['Cerrar'],
      });
  
      await alert.present();
    }
    async showAlert3() {
      const alert = await this.alertController.create({
        header: 'Sandwich Bondiola',
        message: 'Bondiola, queso gruyere, olivas negras, mayonesa al ajo.',
              buttons: ['Cerrar'],
      });
  
      await alert.present();
    }
    async showAlert4() {
      const alert = await this.alertController.create({
        header: 'Sandwich Colonia',
        message: 'Salame de la colonia, queso gruyere, queso tibo, y manteca.',
              buttons: ['Cerrar'],
      });
  
      await alert.present();
    }
    async showAlert5() {
      const alert = await this.alertController.create({
        header: 'Sandwich Vegetariano',
        message: ' Vegetales salteados, hongos, queso parmesano.',
              buttons: ['Cerrar'],
      });
  
      await alert.present();
    }
    async showAlert6() {
      const alert = await this.alertController.create({
        header: 'Sandwich de Pollo',
        message: 'Lechuga, tomate, queso, jamón, pollo grillado.',
              buttons: ['Cerrar'],
      });
  
      await alert.present();
    }
    async showAlert7() {
      const alert = await this.alertController.create({
        header: 'Tostado Clásico',
        message: ' Tostado + Papas Copetín.',
              buttons: ['Cerrar'],
      });
  
      await alert.present();
    }
    async showAlert8() {
      const alert = await this.alertController.create({
        header: 'Triple Primavera Frio',
        message: 'Lechuga, tomate, queso, jamón, huevo.',
              buttons: ['Cerrar'],
      });
  
      await alert.present();
    }
  ngOnInit() {
  }

}
