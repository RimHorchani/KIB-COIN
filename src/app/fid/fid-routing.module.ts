import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FidPage } from './fid.page';

const routes: Routes = [
  {
    path: '',
    component: FidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FidPageRoutingModule {}
