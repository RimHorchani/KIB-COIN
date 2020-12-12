import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cart4ModalPage } from './cart4-modal.page';

const routes: Routes = [
  {
    path: '',
    component: Cart4ModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cart4ModalPageRoutingModule {}
