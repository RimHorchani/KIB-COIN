import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Product {
  id:number;
  name:string;
  url:string;
  image:string;
  
  
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  data:Product[] =[
    {
      id:1,
      name:'Breakfast',
      url:'/break',
      image:'break.png'
      

    },
    {
      id:2,
      name:'Appetizers',
      url:'/entre',
      image:'entre.png',
      
      
    },
    {
      id:3,
      name:'Main Course',
      url:'/plat',
      image:'plat.png'
      
    },
    {
      id:4,
      name:'Pizza',
      url:'/pizza',
      image:'pizza.png'
     
    },
    {
      id:5,
      name:'Sandwish',
      url:'/sand',
      image:'sand.png'
     
    },
    {
      id:6,
      name:'Desserts',
      url:'/dessert',
      image:'dess.jpg'
      
    },
    {
      id:6,
      name:'Hot & cold Drinks',
      url:'/drink',
      image:'drink.jpg'
      
    }
  ];
  private cart =[];
  private cartItemCount= new BehaviorSubject(0);

  constructor() { }
  getProducts(){
    return this.data;
  }
  getCart(){
    return this.cart;
  }
  getCartItemCount(){
    return this.cartItemCount;

  }
  addProduct(prod){

  }
  decreaseProduct(prod){

  }
  removeProduct(prod){

  }
}
