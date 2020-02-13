import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeneficiounoPage } from './beneficiouno.page';

const routes: Routes = [
  {
    path: '',
    component: BeneficiounoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeneficiounoPageRoutingModule {}
