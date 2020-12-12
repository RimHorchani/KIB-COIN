import { Component, OnInit } from '@angular/core';
import { EntrepService, Produit } from 'src/app/services/entrep.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cart2-modal',
  templateUrl: './cart2-modal.page.html',
  styleUrls: ['./cart2-modal.page.scss'],
})
export class Cart2ModalPage implements OnInit {

  card: Produit[]= [];

  constructor(private productService: EntrepService, private modalCtrl: ModalController) { }

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
