import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cart4ModalPageRoutingModule } from './cart4-modal-routing.module';

import { Cart4ModalPage } from './cart4-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cart4ModalPageRoutingModule
  ],
  declarations: [Cart4ModalPage]
})
export class Cart4ModalPageModule {}
