import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  redirectToLogin(){
  this.route.navigateByUrl('/login');
  }

}
