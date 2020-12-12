import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../pages/cart-modal/cart-modal.page';

@Component({
  selector: 'app-break',
  templateUrl: './break.page.html',
  styleUrls: ['./break.page.scss'],
})
export class BreakPage implements OnInit {

  prods=[];
  card=[];
  cartItemCount:BehaviorSubject<number>;
  
  constructor(private prodService: ProductService,private modalCtrl: ModalController) {}

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
      component : CartModalPage,
      cssClass :'cart-modal'
    });
    modal.present();
  
  }

 
}
