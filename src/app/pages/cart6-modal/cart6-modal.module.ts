import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cart6ModalPageRoutingModule } from './cart6-modal-routing.module';

import { Cart6ModalPage } from './cart6-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cart6ModalPageRoutingModule
  ],
  declarations: [Cart6ModalPage]
})
export class Cart6ModalPageModule {}
