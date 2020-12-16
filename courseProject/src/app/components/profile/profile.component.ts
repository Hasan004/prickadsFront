import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  newUser = {} as User

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.newUser = this.service.activeGebruiker;    
  }

}
