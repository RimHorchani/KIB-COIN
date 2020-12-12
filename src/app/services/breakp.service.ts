import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Produit{
  id:number;
  name:string;
  url:string;
 
  description:string;
  price:number;
  amount:number;
  image:string;

}

@Injectable({
  providedIn: 'root'
})
export class BreakpService {

  prod:Produit[] =[
    {
      id:1,
      name:'Cheesecake',
      url:'/break',
     
      description:'choclate raspberry strawberry nutella M&M',
      price: 7,
      amount: 4,
      image:'dess1.jpg'

    },
    {
      id:1,
      name:'Waffle',
      url:'/break',
     
      description:'Fruits banana,nutella,nutella banana,nutella dried fruit,cheezy waffle ',
      price: 10,
      amount: 2,
      image:'dess2.jpg'

    },
    {
      id:1,
      name:'Ice cream',
      url:'/break',
     
      description:'Banana ice,choclate raspberry strawberry ,lemon,pistachio',
      price: 8,
      amount: 4,
      image:'dess3.jpg'

    },
    {
      id:1,
      name:'Sweet crepe',
      url:'/break',
     
      description:'choclate,nutella, nutella banana',
      price: 10000,
      amount: 7.8,
      image:'dess4.jpg'

    },
    {
      id:1,
      name:'     Fondant  ',
      url:'/break',
     
      description:'white choclate,nutella,M&Ms,pistachio',
      price: 10000,
      amount: 12,
      image:'dess5.jpg'

    },
    
   
  ];
  private card =[];
  private cartItemCount= new BehaviorSubject(0);

  constructor() { }
  getProds(){
    return this.prod;
  }
  getCart(){
    return this.card;
  }
  getCartItemCount(){
    return this.cartItemCount;

  }
  
  addProduct(prod){
    let added= false;
    for(let p of this.card){
      if(p.id === prod.id){
        p.amount +=1;
        added = true;
        break;
      }
    }
    if(!added){
      this.card.push(prod);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);

  }
  decreaseProduct(prod){
    for(let [index,p] of this.card.entries()){
      if(p.id === prod.id){
        p.amount -=1;
        if(p.amount == 0){
          this.card.splice(index,1);
        }
      }

    }
    this.cartItemCount.next(this.cartItemCount.value -1);

  }
  removeProduct(prod){
    for(let [index,p] of this.card.entries()){
      if(p.id === prod.id){
        this.cartItemCount.next(this.cartItemCount.value -p.amount);
        this.card.splice(index,1);
      }
    }

  }
}