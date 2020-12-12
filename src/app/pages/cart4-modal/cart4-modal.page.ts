import { Component, OnInit } from '@angular/core';
import { PizzapService ,Produit} from 'src/app/services/pizzap.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cart4-modal',
  templateUrl: './cart4-modal.page.html',
  styleUrls: ['./cart4-modal.page.scss'],
})
export class Cart4ModalPage implements OnInit {
  card: Produit[]= [];


  constructor(private productService: PizzapService, private modalCtrl: ModalController) { }

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
