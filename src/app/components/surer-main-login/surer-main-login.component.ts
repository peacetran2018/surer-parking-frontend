import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-surer-main-login',
  templateUrl: './surer-main-login.component.html',
  styleUrls: ['./surer-main-login.component.css']
})
export class SurerMainLoginComponent implements OnInit {
  @ViewChild("myNameElem")
  myNameElem!: ElementRef;
  isLogin: boolean;
  constructor() { 
    this.isLogin = true;
  }

  ngOnInit(): void {
  }

  Toggle(mode: string) {
    switch (mode) {
      case "login":
        this.isLogin = true;
        break;
      case "signup":
        this.isLogin = false;
        break;
    }
  }
}
