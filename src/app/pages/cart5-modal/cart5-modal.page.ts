import { Component, OnInit } from '@angular/core';
import { PlatpService,Produit } from 'src/app/services/platp.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cart5-modal',
  templateUrl: './cart5-modal.page.html',
  styleUrls: ['./cart5-modal.page.scss'],
})
export class Cart5ModalPage implements OnInit {

  card: Produit[]= [];


  constructor(private productService: PlatpService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.card= this.productService.getCart();
  }
  decreaseCartItem(prods){
    this.productService.decreaseProduct(prods);
  }
  increaseCartItem(prods){
    this.productService.addProduct(prods);
  }
  removeCartItem(prods){
    this.productService.removeProduct(prods);
  }
  getTotal(){
    return this.card.reduce((i,j) => i + j.price * j.amount,0);
  }
  close(){
    this.modalCtrl.dismiss();
  }
  checkout(){
    
  }


}
