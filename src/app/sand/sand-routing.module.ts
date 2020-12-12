import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SandPage } from './sand.page';

const routes: Routes = [
  {
    path: '',
    component: SandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SandPageRoutingModule {}
