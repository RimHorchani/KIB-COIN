import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cart5ModalPageRoutingModule } from './cart5-modal-routing.module';

import { Cart5ModalPage } from './cart5-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cart5ModalPageRoutingModule
  ],
  declarations: [Cart5ModalPage]
})
export class Cart5ModalPageModule {}
