import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.page.html',
  styleUrls: ['./tablas.page.scss'],
})
export class TablasPage implements OnInit {



  constructor(public alertController: AlertController) { }
  
  
  
      async showAlert() {
        const alert = await this.alertController.create({
          header: 'The Beatles',
          message: 'Queso frito, salchicas en salsa, nuggets de pollo, papas fritas.',
                buttons: ['Cerrar'],
        });
          
        await alert.present();
      }
      async showAlert2() {
        const alert = await this.alertController.create({
          header: 'Jimmy Hendrix',
          message: 'Queso tybo, salame de la colonia, lomito de cerdo a las finas hierbas, mortadela, salchichas en salsa, nuggets de pollo, aceitunas griegas y papas fritas.',
                buttons: ['Cerrar'],
        });
    
        await alert.present();
      }
      async showAlert3() {
        const alert = await this.alertController.create({
          header: 'Elvis Presley',
          message: 'Queso tybo, salame de la colonia, lomito de cerdo a las finas hierbas, aros de cebolla, cubos de queso frito, salchichas en salsa, milanesas, aceitunas griegas y papas fritas.',
                buttons: ['Cerrar'],
        });
        await alert.present();

          }

  ngOnInit() {
  }

}
