/**
* Ionic 4 Firebase Email Auth
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule) },
  { path: 'forgot', loadChildren: () => import('./forgot/forgot.module').then(m => m.ForgotPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'qrscann',
    loadChildren: () => import('./qrscann/qrscann.module').then( m => m.QrscannPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then( m => m.AgendaPageModule)
  },   {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'beneficiouno',
    loadChildren: () => import('./beneficiouno/beneficiouno.module').then( m => m.BeneficiounoPageModule)
  },
  {
    path: 'rabas',
    loadChildren: () => import('./rabas/rabas.module').then( m => m.RabasPageModule)
  },
  {
    path: 'entradas',
    loadChildren: () => import('./entradas/entradas.module').then( m => m.EntradasPageModule)
  },
  {
    path: 'tablas',
    loadChildren: () => import('./tablas/tablas.module').then( m => m.TablasPageModule)
  },
  {
    path: 'platos',
    loadChildren: () => import('./platos/platos.module').then( m => m.PlatosPageModule)
  },
  {
    path: 'pastas',
    loadChildren: () => import('./pastas/pastas.module').then( m => m.PastasPageModule)
  },
  {
    path: 'minuta',
    loadChildren: () => import('./minuta/minuta.module').then( m => m.MinutaPageModule)
  },
  {
    path: 'pizzas',
    loadChildren: () => import('./pizzas/pizzas.module').then( m => m.PizzasPageModule)
  },
  {
    path: 'burger',
    loadChildren: () => import('./burger/burger.module').then( m => m.BurgerPageModule)
  },
  {
    path: 'lomos',
    loadChildren: () => import('./lomos/lomos.module').then( m => m.LomosPageModule)
  },
  {
    path: 'parrilla',
    loadChildren: () => import('./parrilla/parrilla.module').then( m => m.ParrillaPageModule)
  },
  {
    path: 'tacos',
    loadChildren: () => import('./tacos/tacos.module').then( m => m.TacosPageModule)
  },
  {
    path: 'fajitas',
    loadChildren: () => import('./fajitas/fajitas.module').then( m => m.FajitasPageModule)
  },
  {
    path: 'fchicken',
    loadChildren: () => import('./fchicken/fchicken.module').then( m => m.FchickenPageModule)
  },
  {
    path: 'sandwichs',
    loadChildren: () => import('./sandwichs/sandwichs.module').then( m => m.SandwichsPageModule)
  },
  {
    path: 'ensaladas',
    loadChildren: () => import('./ensaladas/ensaladas.module').then( m => m.EnsaladasPageModule)
  },
  {
    path: 'rkids',
    loadChildren: () => import('./rkids/rkids.module').then( m => m.RkidsPageModule)
  },
  {
    path: 'postres',
    loadChildren: () => import('./postres/postres.module').then( m => m.PostresPageModule)
  },
  {
    path: 'misilestank',
    loadChildren: () => import('./misilestank/misilestank.module').then( m => m.MisilestankPageModule)
  },
  {
    path: 'cervezatirada',
    loadChildren: () => import('./cervezatirada/cervezatirada.module').then( m => m.CervezatiradaPageModule)
  },
  {
    path: 'superbalon',
    loadChildren: () => import('./superbalon/superbalon.module').then( m => m.SuperbalonPageModule)
  },
  {
    path: 'cocteleria',
    loadChildren: () => import('./cocteleria/cocteleria.module').then( m => m.CocteleriaPageModule)
  },
  {
    path: 'deautor',
    loadChildren: () => import('./deautor/deautor.module').then( m => m.DeautorPageModule)
  },
  {
    path: 'csabor',
    loadChildren: () => import('./csabor/csabor.module').then( m => m.CsaborPageModule)
  },
  {
    path: 'gintonic',
    loadChildren: () => import('./gintonic/gintonic.module').then( m => m.GintonicPageModule)
  },
  {
    path: 'whiskys',
    loadChildren: () => import('./whiskys/whiskys.module').then( m => m.WhiskysPageModule)
  },
  {
    path: 'espirituosos',
    loadChildren: () => import('./espirituosos/espirituosos.module').then( m => m.EspirituososPageModule)
  },
  {
    path: 'energizantes',
    loadChildren: () => import('./energizantes/energizantes.module').then( m => m.EnergizantesPageModule)
  },
  {
    path: 'espumantes',
    loadChildren: () => import('./espumantes/espumantes.module').then( m => m.EspumantesPageModule)
  },
  {
    path: 'other',
    loadChildren: () => import('./other/other.module').then( m => m.OtherPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
