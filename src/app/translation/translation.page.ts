import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.page.html',
  styleUrls: ['./translation.page.scss'],
})
export class TranslationPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  close(){
    this.modalController.dismiss();
  }

}
