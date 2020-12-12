import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cart5ModalPage } from './cart5-modal.page';

const routes: Routes = [
  {
    path: '',
    component: Cart5ModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cart5ModalPageRoutingModule {}
