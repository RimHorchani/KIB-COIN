import { Component, OnInit } from '@angular/core';
import { SandpService } from '../services/sandp.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Cart6ModalPage } from '../pages/cart6-modal/cart6-modal.page';

@Component({
  selector: 'app-sand',
  templateUrl: './sand.page.html',
  styleUrls: ['./sand.page.scss'],
})
export class SandPage implements OnInit {

  prods=[];
  card=[];
  cartItemCount:BehaviorSubject<number>;

  constructor(private prodService: SandpService, private modalCtrl:ModalController) {}

  
  

 

 
 
  
  

  
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
      component : Cart6ModalPage,
      cssClass :'cart-modal'
    });
    modal.present();
  
  }
}
