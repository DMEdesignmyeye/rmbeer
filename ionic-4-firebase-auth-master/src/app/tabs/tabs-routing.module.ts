import { NgModule } from '@angular/core'; 
 
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { LoginPage } from '../login/login.page';
import { SignupPage } from '../signup/signup.page';
import { AgendaPage } from '../agenda/agenda.page';
import { GalleryPage } from '../gallery/gallery.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [  
      {
        path: 'signup',
        outlet: 'signup',
        component: SignupPage
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'agenda',
        outlet: 'agenda',
        component: AgendaPage
      },
      {
        path: 'galllery',
        outlet: 'galllery',
        component: GalleryPage
      },
      {
        path: 'login',
        outlet: 'login',
        component: LoginPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '(tabs:tabs)',
    pathMatch: 'full'
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
