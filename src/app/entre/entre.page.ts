import { Component, OnInit } from '@angular/core';
import { EntrepService } from '../services/entrep.service';
import { ModalController } from '@ionic/angular';
import { Cart2ModalPage } from '../pages/cart2-modal/cart2-modal.page';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-entre',
  templateUrl: './entre.page.html',
  styleUrls: ['./entre.page.scss'],
})
export class EntrePage implements OnInit {


  prods=[];
  card=[];
  cartItemCount:BehaviorSubject<number>;
  
  constructor(private prodService: EntrepService,private modalCtrl: ModalController) {}

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
      component : Cart2ModalPage,
      cssClass :'cart-modal'
    });
    modal.present();
  
  }


}
