import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangepPageRoutingModule } from './changep-routing.module';

import { ChangepPage } from './changep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangepPageRoutingModule
  ],
  declarations: [ChangepPage]
})
export class ChangepPageModule {}
