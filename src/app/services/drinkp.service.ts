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
export class DrinkpService {

  prod:Produit[] =[
    {
      id:1,
      name:'Water',
      url:'/break',
     
      description:'Bottle 1 littre',
      price: 2,
      amount: 4,
      image:'drink1.jpg'

    },
    {
      id:1,
      name:'Turkish coffee',
      url:'/break',
     
      description:'Orange tree Flower water almonds',
      price: 5,
      amount: 4,
      image:'drink2.jpg'

    },
    {
      id:1,
      name:'Direct coffee',
      url:'/break',
     
      description:'',
      price: 4,
      amount: 4,
      image:'drink3.jpg'

    },
    {
      id:1,
      name:'Cappuccino',
      url:'/break',
     
      description:'',
      price: 8,
      amount: 4,
      image:'drink4.jpg'

    },
    {
      id:1,
      name:'Tea',
      url:'/break',
     
      description:'Iced tea Green tea almonds',
      price: 10000,
      amount: 4,
      image:'drink8.jpeg'

    },
    {
      id:1,
      name:' Juice ',
      url:'/break',
     
      description:'Orange strawberry lemon Kiwi Ananas Banana',
      price: 10000,
      amount: 4,
      image:'drink5.jpg'

    },
    {
      id:1,
      name:'Mojito ',
      url:'/break',
     
      description:'Blue Mojito  Red Mojito   Mojito with red bull ',
      price: 10000,
      amount: 4,
      image:'drink7.jpeg'

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
