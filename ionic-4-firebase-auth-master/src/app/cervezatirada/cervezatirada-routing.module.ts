import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CervezatiradaPage } from './cervezatirada.page';

const routes: Routes = [
  {
    path: '',
    component: CervezatiradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CervezatiradaPageRoutingModule {}
