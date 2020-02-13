import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-parrilla',
  templateUrl: './parrilla.page.html',
  styleUrls: ['./parrilla.page.scss'],
})
export class ParrillaPage implements OnInit {
 

  ngOnInit() {
  
}



constructor(public alertController: AlertController) { }



async showAlert() {
  const alert = await this.alertController.create({
    header: 'Tacos',
    message: '-Carne <br> -Pollo <br>-Langostinos<br> -Vegetariano',
          buttons: ['Cerrar'],
  });
  await alert.present();

}

}