import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperbalonPage } from './superbalon.page';

const routes: Routes = [
  {
    path: '',
    component: SuperbalonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperbalonPageRoutingModule {}
