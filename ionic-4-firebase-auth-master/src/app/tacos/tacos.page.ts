import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tacos',
  templateUrl: './tacos.page.html',
  styleUrls: ['./tacos.page.scss'],
})
export class TacosPage implements OnInit {


  ngOnInit() {
  
  }

  constructor(public alertController: AlertController) { }
  
  
  
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Tacos',
      message: '6 Cortes (Chorizo, Morcilla, Chinchulín, costilla, matambre, vacio. <br> + Papas Revueltas <br>  + 1  Empanada ',
            buttons: ['Cerrar'],
    });
    await alert.present();
  
  }
  
  }