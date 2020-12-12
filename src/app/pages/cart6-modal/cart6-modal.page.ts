import { Component, OnInit } from '@angular/core';
import { SandpService ,Produit} from 'src/app/services/sandp.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cart6-modal',
  templateUrl: './cart6-modal.page.html',
  styleUrls: ['./cart6-modal.page.scss'],
})
export class Cart6ModalPage implements OnInit {

  card: Produit[]= [];


  constructor(private productService: SandpService, private modalCtrl: ModalController) { }

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
