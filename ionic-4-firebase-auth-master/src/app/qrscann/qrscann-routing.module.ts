import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrscannPage } from './qrscann.page';

const routes: Routes = [
  {
    path: '',
    component: QrscannPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrscannPageRoutingModule {}
