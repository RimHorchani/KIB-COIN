import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ModalController, NavController, Platform, ToastController } from '@ionic/angular';
import { FidbackPage } from '../fidback/fidback.page';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  qrData= null;
  createdCode=null;
  scannedCode= null;
 
  constructor(private barcodeScanner:BarcodeScanner,private modalController:ModalController) { 
  }

scanCode(){
  this.barcodeScanner.scan().then((barcodeData) =>{
    this.scannedCode= barcodeData.text;

 
    
  },(err)=>{
    alert(JSON.stringify(err))
  })

}
  ngOnInit() {
  }
  async addRate(){
    const modal= await this.modalController.create({
      component:FidbackPage,
      cssClass: 'dialog-modal',
      componentProps:{
        'id':"1",
      }
    });
    return await modal.present();
  }

}
