import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  authenticated:boolean
  constructor(private authService:AuthService) {
    this.authenticated=this.authService.isAuthenticated()
  }
  logout(){
    this.authService.logout()
    this.authenticated=false
  }


}
