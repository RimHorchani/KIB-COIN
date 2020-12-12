import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/services/platp.service';
import { ProductService } from 'src/app/services/product.service';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {
  card: Produit[]= [];

  constructor(private productService: ProductService, private modalCtrl: ModalController,private navCtrl:NavController) { }

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
