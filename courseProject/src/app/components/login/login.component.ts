import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
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

  error$ = this.service.error$;

  constructor(public service: UserService, private router: Router, private toastr: ToastrService) { }

  loginUser(): void {
    this.service.login(this.newUser);
    this.newUser = {} as User;

    this.error$.subscribe(errMess => this.toastr.error("Uw inloggegevens zijn onjuist", "Niet gelukt!"));

    this.service.activeGebruikerUpdated$.subscribe(g => {
      this.toastr.success("U bent succesvol ingelogd!", "gelukt");
      this.router.navigate(['/home'])
    });
  }
}
