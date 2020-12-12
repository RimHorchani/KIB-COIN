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
export class EntrepService {

  
  prod:Produit[] =[
    {
      id:1,
      name:'Ceser salad',
      url:'/break',
     
      description:'Escalope lettuce tomatos cucumber oil nuts',
      price: 12,
      amount: 4,
      image:'entre1.jpg'

    },
    {
      id:1,
      name:'Tounsia Salad',
      url:'/break',
     
      description:'Tomatos cucumber Onions oil lemon',
      price: 6,
      amount: 4,
      image:'entre4.jpg'

    },
    {
      id:1,
      name:'Meshouia salad',
      url:'/break',
     
      description:'garlic tomatos eggplant pepper',
      price: 2,
      amount: 6.5,
      image:'entre2.jfif'

    },
    {
      id:1,
      name:'Brika',
      url:'/break',
     
      description:'Eggs thon cheese',
      price: 10000,
      amount: 5,
      image:'entre3.jpg'

    },
    {
      id:1,
      name:'Soup',
      url:'/break',
     
      description:'lentil onions ',
      price: 10000,
      amount: 4,
      image:'entre5.jpg'

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
