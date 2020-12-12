import { Component, OnInit } from '@angular/core';
import { DrinkpService ,Produit} from 'src/app/services/drinkp.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cart3-modal',
  templateUrl: './cart3-modal.page.html',
  styleUrls: ['./cart3-modal.page.scss'],
})
export class Cart3ModalPage implements OnInit {
  card: Produit[]= [];


  constructor(private productService: DrinkpService, private modalCtrl: ModalController) { }

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
