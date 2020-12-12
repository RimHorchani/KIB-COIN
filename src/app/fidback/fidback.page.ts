import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';




@Component({
  selector: 'app-fidback',
  templateUrl: './fidback.page.html',
  styleUrls: ['./fidback.page.scss'],
})
export class FidbackPage implements OnInit {
  id:number;
  
  constructor(public modalController:ModalController,) {
  }
 
  

  ngOnInit() {
 
   
    
  }
  
  closeModal(){
    this.modalController.dismiss();
  }
  
  

 
}
