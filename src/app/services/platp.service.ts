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
export class PlatpService {

  prod:Produit[] =[
    {
      id:1,
      name:'Meat Couscous',
      url:'/break',
     
      description:'beef couscous potatos pepper raisin',
      price: 20,
      amount: 4,
      image:'plat1.jpg'

    },
    {
      id:1,
      name:'Couscous with fish',
      url:'/break',
     
      description:'Wrata fish couscous potatos',
      price: 25,
      amount: 4,
      image:'plat2.jpg'

    },
    {
      id:1,
      name:'Spaghetti bolognese      ',
      url:'/break',
     
      description:'ground beef spaghetty mozzarella tomato salsa',
      price: 20,
      amount: 4,
      image:'plat3.jpg'

    },
    {
      id:1,
      name:'Seafood spaghetti',
      url:'/break',
     
      description:'macaroni fish shrimp',
      price: 30,
      amount: 4,
      image:'plat4.jpg'

    },
    {
      id:1,
      name:'Escalope dish',
      url:'/break',
     
      description:'Potatos salad spaghetty escalope ',
      price: 15,
      amount: 4,
      image:'plat5.jpg'

    },
    {
      id:1,
      name:'Mixed dish',
      url:'/break',
     
      description:'beef escalop potatos salad ',
      price: 25,
      amount: 4,
      image:'plat6.png'

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
