import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registreren',
  templateUrl: './registreren.component.html',
  styleUrls: ['./registreren.component.css']
})
export class RegistrerenComponent {

  newUser = {} as User;

  constructor(public service : UserService, private router : Router, private toastr : ToastrService) { }

  addUser() : void{
      this.service.add(this.newUser);

      this.service.errorRegister$.subscribe(err => this.toastr.info("U heeft al een bestaand acccount met de opgegeven emailadres"))

      this.service.registerUserUpdated$.subscribe(g => {
        this.newUser = {} as User;
        this.toastr.success("Bedankt we hebben uw registratie succesvol ontvangen!", "Gelukt!")
        console.log("User met naam " + this.newUser.naam + " is in de database opgeslagen")
        setTimeout(()=>{
            this.router.navigate(['/login'])
          }, 1500)
        }
      );
  }
}
