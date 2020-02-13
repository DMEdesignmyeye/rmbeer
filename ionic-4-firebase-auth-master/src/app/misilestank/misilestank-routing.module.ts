import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisilestankPage } from './misilestank.page';

const routes: Routes = [
  {
    path: '',
    component: MisilestankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisilestankPageRoutingModule {}
