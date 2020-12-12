import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FidPageRoutingModule } from './fid-routing.module';

import { FidPage } from './fid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FidPageRoutingModule
  ],
  declarations: [FidPage]
})
export class FidPageModule {}
