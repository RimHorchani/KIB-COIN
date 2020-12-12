import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarttService {
  private data=[
    {
      category : 'Special Pack',
      expanded: true,
      products:[
        {id:0,name:'Cola,pizza chiken',price:'500 ',image:'special1.jpg'},
        {id:1,name:'Couscous,tajine',price:'1000 ',image:'specia2.jpg'},
        {id:2,name:'Coffe,crepe',price:'300 ',image:'special4.jpg'},
        {id:3,name:'Tounsi plate',price:'300 ',image:'special5.jpg'},

      ]
    },
    {
      category : 'Pasta',
      
      products:[
        {id:0,name:'Tariatelli',price:'500 ',image:'pasta1.jpg'},
        {id:1,name:'Creamy tomato and spinach pasta',price:'1000 ',image:'pasta2.jpg'},
        {id:2,name:'Chicken Alfredo Pasta',price:'300 ',image:'pasta3.jpg'},
        {id:3,name:'Spaghettis à la sicilienne',price:'300 ',image:'pasta4.jpg'},

      ]
    },
    {
      category : 'Drinks',
      
      products:[
        {id:0,name:'Mojito pastèque',price:'500' ,image:'drinks1.jpg'},
        {id:1,name:'Iced Tea',price:'1000 ',image:'drinks2.jpg'},
        

      ]
    },
   
  ];
  

  constructor() { }
  getProducts(){
    return this.data;
  }
  getCart(){
    return this.card;
  }
  
  private card =[];
  private cartItemCount= new BehaviorSubject(0);

  
  getProds(){
    return this.data;
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
