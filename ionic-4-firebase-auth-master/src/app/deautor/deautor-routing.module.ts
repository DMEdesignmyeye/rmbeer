import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeautorPage } from './deautor.page';

const routes: Routes = [
  {
    path: '',
    component: DeautorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeautorPageRoutingModule {}
