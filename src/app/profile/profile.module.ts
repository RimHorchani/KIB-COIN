import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';


@NgModule({
  imports: [
    CommonModule,
    NgxQRCodeModule,
    
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    
  ],
  
 

  declarations: [ProfilePage]
})
export class ProfilePageModule {}
