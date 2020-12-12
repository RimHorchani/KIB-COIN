import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SandPageRoutingModule } from './sand-routing.module';

import { SandPage } from './sand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SandPageRoutingModule
  ],
  declarations: [SandPage]
})
export class SandPageModule {}
