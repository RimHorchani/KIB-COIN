import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cart2ModalPage } from './cart2-modal.page';

const routes: Routes = [
  {
    path: '',
    component: Cart2ModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cart2ModalPageRoutingModule {}
