import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  users: User[];

  newUser = {} as User;

  constructor(public service : UserService, private router : Router) { }

  addUser() : void{
    this.service.login(this.newUser);
    this.newUser = {} as User;
    // this.router.navigate(['/list'])
  }

}
