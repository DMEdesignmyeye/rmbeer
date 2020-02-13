import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsaborPage } from './csabor.page';

const routes: Routes = [
  {
    path: '',
    component: CsaborPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsaborPageRoutingModule {}
