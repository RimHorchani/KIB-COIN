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
export class SandpService {

  prod:Produit[] =[
    {
      id:1,
      name:'Tacos',
      url:'/break',
     
      description:'',
      price: 2,
      amount: 4,
      image:'san3.jpeg'

    },
    {
      id:1,
      name:'Makloub',
      url:'/break',
     
      description:'',
      price: 2,
      amount: 4,
      image:'san1.jpg'

    },
    {
      id:1,
      name:'Tabouna',
      url:'/break',
     
      description:'',
      price: 2,
      amount: 4,
      image:'san5.jpg'

    },
    {
      id:1,
      name:'Burger',
      url:'/break',
     
      description:'',
      price: 10000,
      amount: 4,
      image:'san2.jpeg'

    },
    {
      id:1,
      name:' Pita ',
      url:'/break',
     
      description:'',
      price: 10000,
      amount: 4,
      image:'san6.jpg'

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
