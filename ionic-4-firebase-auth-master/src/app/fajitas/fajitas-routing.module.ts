import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FajitasPage } from './fajitas.page';

const routes: Routes = [
  {
    path: '',
    component: FajitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FajitasPageRoutingModule {}
