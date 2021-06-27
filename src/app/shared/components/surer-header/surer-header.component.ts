import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surer-header',
  templateUrl: './surer-header.component.html',
  styleUrls: ['./surer-header.component.css']
})
export class SurerHeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onLogout(){
    localStorage.removeItem('jwttoken');
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }
}
