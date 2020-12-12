import { Component, OnInit } from '@angular/core';
import { BreakpService } from '../services/breakp.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Cart1ModalPage } from '../pages/cart1-modal/cart1-modal.page';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.page.html',
  styleUrls: ['./dessert.page.scss'],
})
export class DessertPage implements OnInit {

  
  prods=[];
  card=[];
  cartItemCount:BehaviorSubject<number>;

  constructor(private prodService: BreakpService,private modalCtrl:ModalController) {}

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
      component : Cart1ModalPage,
      cssClass :'cart-modal'
    });
    modal.present();
  
  }

 
 

}
