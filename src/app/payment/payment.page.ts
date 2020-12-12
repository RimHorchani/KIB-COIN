import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { makeClient } from '@spree/storefront-api-v2-sdk/dist/client'



@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

 
  constructor(private navController:NavController) { }
 
 

  ngOnInit() {
  }
  closeModal(){
    this.navController.navigateForward('/profile');
  }

}
