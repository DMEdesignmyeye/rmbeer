import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-fajitas',
  templateUrl: './fajitas.page.html',
  styleUrls: ['./fajitas.page.scss'],
})
export class FajitasPage implements OnInit {



  ngOnInit() {
  
}



constructor(public alertController: AlertController) { }



async showAlert() {
  const alert = await this.alertController.create({
    header: 'Fajitas',
    message: '-Carne <br> -Pollo <br>-Verduras',
          buttons: ['Cerrar'],
  });
  await alert.present();

}
}