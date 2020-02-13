import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ensaladas',
  templateUrl: './ensaladas.page.html',
  styleUrls: ['./ensaladas.page.scss'],
})
export class EnsaladasPage implements OnInit {

  constructor(public alertController: AlertController) { }


  ngOnInit() {
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Ensalada Rock Me Beer',
      message: 'Tomates cherry, huevo, arveja y queso.',
            buttons: ['Cerrar'],
    });

    await alert.present();
  }
}
