import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
 
  

  cart=[];
  products=[];

  constructor(private cartService: CartService,modalCtrl:ModalController) {}

  ngOnInit(){

    this.products=this.cartService.getProducts();
  }
 

}
