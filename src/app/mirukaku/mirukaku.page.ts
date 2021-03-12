import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mirukaku',
  templateUrl: './mirukaku.page.html',
  styleUrls: ['./mirukaku.page.scss'],
})
export class MirukakuPage implements OnInit {

  constructor(
    private router:Router,
  ) { }

  ngOnInit(){
    if(typeof localStorage.flag === "undefined") {
      this.router.navigate(['/name']);
    }
  }
  getOtherPage1 = () => {
    this.router.navigate(['/tabs','tab1'])
  }

  getOtherPagee = () => {
    this.router.navigate(['/edit','1'])
  }

}
