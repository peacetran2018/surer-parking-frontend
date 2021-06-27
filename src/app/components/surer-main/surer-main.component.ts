import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-surer-main',
  templateUrl: './surer-main.component.html',
  styleUrls: ['./surer-main.component.css'],
  providers: [DatePipe]
})
export class SurerMainComponent implements OnInit {  
  constructor() {
  }  

  ngOnInit(): void {
  }
  
}
