import { Component, OnInit } from '@angular/core';
import { PizzapService } from '../services/pizzap.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Cart4ModalPage } from '../pages/cart4-modal/cart4-modal.page';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.page.html',
  styleUrls: ['./pizza.page.scss'],
})
export class PizzaPage implements OnInit {

  prods=[];
  card=[];
  cartItemCount:BehaviorSubject<number>;
  

  constructor(private prodService: PizzapService,private modalCtrl:ModalController) {}

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
      component : Cart4ModalPage,
      cssClass :'cart-modal'
    });
    modal.present();
  
  }


}
