import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CocteleriaPage } from './cocteleria.page';

const routes: Routes = [
  {
    path: '',
    component: CocteleriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocteleriaPageRoutingModule {}
