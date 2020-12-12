import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarttService } from '../cartt.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.page.html',
  styleUrls: ['./offre.page.scss'],
})
export class OffrePage implements OnInit {
  cart=[];
  items=[];
  sliderConfig = {
    spaceBetween: 10,
    centeredSlides:true,
    slidesPerView: 1.6

  }

  constructor(private carttService:CarttService,private router:Router) { }

  ngOnInit() {
    this.cart=this.carttService.getCart();
    this.items=this.carttService.getProducts();
  }
  addToCart(product){
    this.carttService.addProduct(product);
  }
  openCart(){
    this.router.navigate(['cart'])
  }
  open(){
    this.router.navigate(['home'])

  }

}
