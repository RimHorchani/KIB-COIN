import { Component, OnInit } from '@angular/core';
import { PlatpService } from '../services/platp.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Cart5ModalPage } from '../pages/cart5-modal/cart5-modal.page';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.page.html',
  styleUrls: ['./plat.page.scss'],
})
export class PlatPage implements OnInit {

 
  prods=[];
  card=[];
  cartItemCount:BehaviorSubject<number>;

  constructor(private prodService: PlatpService, private modalCtrl:ModalController) {}

 
 
  
  

  
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
      component : Cart5ModalPage,
      cssClass :'cart-modal'
    });
    modal.present();
  
  }


}
