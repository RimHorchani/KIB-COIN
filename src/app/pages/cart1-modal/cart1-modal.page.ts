import { Component, OnInit } from '@angular/core';
import { BreakpService,Produit } from 'src/app/services/breakp.service';
import { ModalController, NavController } from '@ionic/angular';



@Component({
  selector: 'app-cart1-modal',
  templateUrl: './cart1-modal.page.html',
  styleUrls: ['./cart1-modal.page.scss'],
})
export class Cart1ModalPage implements OnInit {

  card: Produit[]= [];

  constructor(private productService: BreakpService, private modalCtrl: ModalController,private navCtrl: NavController) { }

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
