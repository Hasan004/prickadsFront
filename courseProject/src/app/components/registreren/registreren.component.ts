import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registreren',
  templateUrl: './registreren.component.html',
  styleUrls: ['./registreren.component.css']
})
export class RegistrerenComponent {

  users: User[];

  newUser = {} as User;

  constructor(public service : UserService, private router : Router) { }

  addUser() : void{
    this.service.add(this.newUser);
    console.log("User met naam " + this.newUser.naam + " is in de database opgeslagen")
    this.newUser = {} as User;
    this.router.navigate(['/login'])
  }
n
}
