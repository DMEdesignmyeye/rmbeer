import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnergizantesPage } from './energizantes.page';

const routes: Routes = [
  {
    path: '',
    component: EnergizantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnergizantesPageRoutingModule {}
