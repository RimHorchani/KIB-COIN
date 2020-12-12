import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cart1ModalPage } from './cart1-modal.page';

const routes: Routes = [
  {
    path: '',
    component: Cart1ModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cart1ModalPageRoutingModule {}
