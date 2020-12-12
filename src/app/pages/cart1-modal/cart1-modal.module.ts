import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cart1ModalPageRoutingModule } from './cart1-modal-routing.module';

import { Cart1ModalPage } from './cart1-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cart1ModalPageRoutingModule
  ],
  declarations: [Cart1ModalPage]
})
export class Cart1ModalPageModule {}
