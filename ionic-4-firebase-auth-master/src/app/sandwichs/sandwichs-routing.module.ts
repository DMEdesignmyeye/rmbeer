import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SandwichsPage } from './sandwichs.page';

const routes: Routes = [
  {
    path: '',
    component: SandwichsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SandwichsPageRoutingModule {}
