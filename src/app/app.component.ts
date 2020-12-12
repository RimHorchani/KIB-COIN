import { Component } from '@angular/core';

import { ModalController, NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { FidbackPage } from './fidback/fidback.page';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages=[
  
  
    {
      title:'Breakfast',
      url:'/break',
      icon: 'break'

    },
    {
      title:'Entries',
      url:'/entre',
      icon: 'entre'

    },
    {
      title:'Dishes',
      url:'/plat',
      icon: 'plat'

    },
    {
      title:'Pizza',
      url:'/pizza',
      icon: 'pizza'

    },
    {
      title:'Sandwish',
      url:'/sand',
      icon: 'sandwish'

    },
    {
      title:'Desserts',
      url:'/dessert',
      icon: 'dessert'

    },
    {
      title:'Hot & cold Drink',
      url:'/drink',
      icon: 'drink'

    },
   
   
  


  ]
  constructor(
    private platform: Platform,
    
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    
    private modalController:ModalController,
    private navCtrl:NavController
  ) {
    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     
     
    });
  }
  async addRate(){
    const modal= await this.modalController.create({
      component:FidbackPage,
      cssClass: 'dialog-modal',
      componentProps:{
        'id':"1",
      }
    });
    return await modal.present();
  }
  close(){
    this.modalController.dismiss();
  }

}
