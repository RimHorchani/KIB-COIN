import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { TranslationPage } from '../translation/translation.page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router:Router,private modalController:ModalController) { }

  ngOnInit() {
  }
  change(){
    this.router.navigate(['changep'])

  
  }
  changeTra(){
    this.router.navigate(['translate'])
      
  }
  async addRate(){
    const modal= await this.modalController.create({
      component:TranslationPage,
      cssClass: 'translation-modal',
      componentProps:{
        'id':"1",
      }
    });
    return await modal.present();
  }

}
