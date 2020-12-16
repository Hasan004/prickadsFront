import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Advertentie } from 'src/app/models/Advertentie';
import { User } from 'src/app/models/User';
import { AdService } from 'src/app/services/ad.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-get-my-ads',
  templateUrl: './get-my-ads.component.html',
  styleUrls: ['./get-my-ads.component.css']
})
export class GetMyAdsComponent{

  constructor(private adService : AdService, public userService: UserService, private router: Router, private toastr: ToastrService) { }

  adsByIdUpdated$ = this.adService.getAllByUserId(this.userService.activeGebruiker);

  deleteUser(u: Advertentie): void{
    console.log(u.id)
    this.adService.delete(u.id);

    this.adService.deleteError$.subscribe(err => this.toastr.error("niet gelukt"))
  
    this.toastr.success("Advertentie met id " + u.id + " is verwijderd", "Success");
    this.router.navigate(['/timeline'])
  
  }

}
