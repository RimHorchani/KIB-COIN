import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cart6ModalPage } from './cart6-modal.page';

const routes: Routes = [
  {
    path: '',
    component: Cart6ModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cart6ModalPageRoutingModule {}
