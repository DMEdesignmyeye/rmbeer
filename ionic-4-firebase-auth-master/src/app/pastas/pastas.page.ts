import { Component, OnInit } from '@angular/core'; 
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pastas',
  templateUrl: './pastas.page.html',
  styleUrls: ['./pastas.page.scss'],
})
export class PastasPage implements OnInit {
 
  ngOnInit() {
  }


  constructor(public alertController: AlertController) { }

 

  async showAlert6() {
    const alert = await this.alertController.create({
      header: 'Salsas',
      message: '-Mixta <br> -Filetto<br> -Crema<br>-Parissiene <br>-Mixta.',
            buttons: ['Cerrar'],
    });
    await alert.present();

  }
  
}