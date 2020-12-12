import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changep',
  templateUrl: './changep.page.html',
  styleUrls: ['./changep.page.scss'],
})
export class ChangepPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  close(){
    this.router.navigate(['settings'])

  }

}
