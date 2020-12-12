import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FidbackPage } from './fidback.page';

const routes: Routes = [
  {
    path: '',
    component: FidbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FidbackPageRoutingModule {}
