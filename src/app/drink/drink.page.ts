import { Component, OnInit } from '@angular/core';
import { DrinkpService } from '../services/drinkp.service';
import { ModalController } from '@ionic/angular';
import { Cart1ModalPage } from '../pages/cart1-modal/cart1-modal.page';
import { BehaviorSubject } from 'rxjs';
import { Cart3ModalPage } from '../pages/cart3-modal/cart3-modal.page';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.page.html',
  styleUrls: ['./drink.page.scss'],
})
export class DrinkPage implements OnInit {

  
  
  prods=[];
  card=[];
  cartItemCount:BehaviorSubject<number>;
  

  constructor(private prodService: DrinkpService,private modalCtrl:ModalController) {}

  ngOnInit(){

    this.prods=this.prodService.getProds();
    this.card=this.prodService.getCart();
    this.cartItemCount=this.prodService.getCartItemCount();
  }
  addToCart(prods){
    
    this.prodService.addProduct(prods);

  }
   async openCart(){
    let modal = await this.modalCtrl.create({
      component : Cart3ModalPage,
      cssClass :'cart-modal'
    });
    modal.present();
  
  }



}
