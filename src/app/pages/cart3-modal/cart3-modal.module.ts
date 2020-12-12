import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cart3ModalPageRoutingModule } from './cart3-modal-routing.module';

import { Cart3ModalPage } from './cart3-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cart3ModalPageRoutingModule
  ],
  declarations: [Cart3ModalPage]
})
export class Cart3ModalPageModule {}
