import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Advertentie } from 'src/app/models/Advertentie';
import { AdService } from 'src/app/services/ad.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-ad',
  templateUrl: './post-ad.component.html',
  styleUrls: ['./post-ad.component.css']
})
export class PostAdComponent {

  newAd = {} as Advertentie;

  constructor(public service : AdService, private router : Router, private toastr : ToastrService, private userService : UserService) { }

  addAdvertentie(){
    this.newAd.user = this.userService.activeGebruiker
    this.newAd.verkocht = false;
    this.service.add(this.newAd)

    this.service.advertentieUpdated$.subscribe(resp => {
      this.toastr.success("Het posten van je advertentie is gelukt!", "Success")
      this.router.navigate(['/timeline'])
    })

    this.service.error$.subscribe(err => this.toastr.error("We hebben uw advertentie niet kunnen toevoegen probeer het later opnieuw", "Error"))

  }


}
