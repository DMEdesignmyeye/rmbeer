import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';


import { QrscannPageModule } from '../qrscann/qrscann.module';
import { HomePageModule } from '../home/home.module';
import { SignupPageModule } from '../signup/signup.module';
import { AgendaPageModule } from '../agenda/agenda.module';
import { GalleryPageModule } from '../gallery/gallery.module';
import { ForgotPageModule } from '../forgot/forgot.module';
import { LoginPageModule } from '../login/login.module';
import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ForgotPageModule,
    AgendaPageModule,
    SignupPageModule, 
    LoginPageModule,
    GalleryPageModule,
    HomePageModule,
    QrscannPageModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
