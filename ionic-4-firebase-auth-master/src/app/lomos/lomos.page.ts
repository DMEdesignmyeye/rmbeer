import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lomos',
  templateUrl: './lomos.page.html',
  styleUrls: ['./lomos.page.scss'],
})
export class LomosPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Lomo Simple',
      message: 'Tierno bife de ternera, lechuga, tomate, mayonesa al ajo, queso.',
            buttons: ['Cerrar'],
    });
      
    await alert.present();
  }
  async showAlert2() {
    const alert = await this.alertController.create({
      header: 'Lomo Completo',
      message: 'Tierno bife de ternera, lechuga, tomate, mayonesa al ajo, jamón, huevo, queso.',
            buttons: ['Cerrar'],
    });
      
    await alert.present();
  }
  async showAlert4() {
    const alert = await this.alertController.create({
      header: 'Lomo PIG',
      message: 'Tierno bife de ternera, lechuga, bacon, cebolla morada caramelizada, tomate, mayonesa al ajo, jamón, huevo, queso cheddar.',
            buttons: ['Cerrar'],
    });
      
    await alert.present();
  }
  async showAlert3() {
    const alert = await this.alertController.create({
      header: 'Lomo Rock Me Beer',
      message: 'Tierno bife de ternera, lechuga, bacon, cebolla morada, tomate, mayonesa al ajo, jamón, huevo, queso.',
            buttons: ['Cerrar'],
    });
      
    await alert.present();
  }
}
