import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {Base64ToGallery} from '@ionic-native/base64-to-gallery/ngx';
import { CartModalPageModule } from './pages/cart-modal/cart-modal.module';
import { Cart1ModalPage } from './pages/cart1-modal/cart1-modal.page';
import { Cart1ModalPageModule } from './pages/cart1-modal/cart1-modal.module';
import { Cart2ModalPageModule } from './pages/cart2-modal/cart2-modal.module';
import { Cart3ModalPageModule } from './pages/cart3-modal/cart3-modal.module';
import { Cart4ModalPageModule } from './pages/cart4-modal/cart4-modal.module';
import { Cart5ModalPageModule } from './pages/cart5-modal/cart5-modal.module';
import { Cart6ModalPageModule } from './pages/cart6-modal/cart6-modal.module';
import { FidbackPageModule } from './fidback/fidback.module';
import { FidbackPage } from './fidback/fidback.page';
import { FidPage } from './fid/fid.page';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import { QRScanner,QRScannerStatus } from '@ionic-native/qr-scanner/ngx';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,NgxQRCodeModule, 
    
    
    IonicModule.forRoot(),IonicModule,AppRoutingModule,FidbackPageModule,CartModalPageModule,Cart1ModalPageModule,Cart2ModalPageModule,Cart3ModalPageModule,Cart4ModalPageModule,Cart5ModalPageModule,Cart6ModalPageModule,],
  providers: [
    StatusBar,
    BarcodeScanner,
    Base64ToGallery,
    QRScanner,

    SplashScreen,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
