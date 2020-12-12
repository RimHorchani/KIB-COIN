import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.page.html',
  styleUrls: ['./pass.page.scss'],
})
export class PassPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  closeModal(){
    this.router.navigate(['home'])
      
  }

}
