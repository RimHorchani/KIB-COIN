import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cart3ModalPage } from './cart3-modal.page';

const routes: Routes = [
  {
    path: '',
    component: Cart3ModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cart3ModalPageRoutingModule {}
