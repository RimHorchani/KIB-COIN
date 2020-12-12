import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartPage } from '../cart/cart.page';
import { CarttService } from '../cartt.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.page.html',
  styleUrls: ['./offres.page.scss'],
})
export class OffresPage implements OnInit {

  
  card=[];
  cartItemCount:BehaviorSubject<number>;
  items=[];
  sliderConfig = {
    spaceBetween: 10,
    centeredSlides:true,
    slidesPerView: 1.6

  }

  constructor(private carttService:CarttService,private router:Router,private modalCtrl:ModalController) { }

  ngOnInit() {
    this.card=this.carttService.getCart();
    this.items=this.carttService.getProducts();
  }
  addToCart(product){
    this.carttService.addProduct(product);
  }
  async openCart(){
    let modal = await this.modalCtrl.create({
      component : CartPage,
      cssClass :'cartt-modal'
    });
    modal.present();
  
  }

  open(){
    this.router.navigate(['home'])

  }


}
