import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private service : UserService, private router : Router, private toastr: ToastrService) { }

  logout(): void{
    this.toastr.info("U bent uitgelogd", "Uitgelogd")
    this.service.activeGebruiker = null;
    this.router.navigate(['/login'])
  }

}
