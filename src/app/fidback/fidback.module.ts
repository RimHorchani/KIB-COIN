import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FidbackPageRoutingModule } from './fidback-routing.module';

import { FidbackPage } from './fidback.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    FidbackPageRoutingModule
  ],
  declarations: [FidbackPage]
})
export class FidbackPageModule {}
