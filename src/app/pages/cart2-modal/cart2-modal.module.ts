import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cart2ModalPageRoutingModule } from './cart2-modal-routing.module';

import { Cart2ModalPage } from './cart2-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cart2ModalPageRoutingModule
  ],
  declarations: [Cart2ModalPage]
})
export class Cart2ModalPageModule {}
