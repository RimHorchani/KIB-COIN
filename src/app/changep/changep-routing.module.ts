import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangepPage } from './changep.page';

const routes: Routes = [
  {
    path: '',
    component: ChangepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangepPageRoutingModule {}
