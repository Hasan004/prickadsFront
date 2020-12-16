import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Advertentie } from 'src/app/models/Advertentie';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-update-ad',
  templateUrl: './update-ad.component.html',
  styleUrls: ['./update-ad.component.css']
})
export class UpdateAdComponent implements OnInit {

  newAd = {} as Advertentie;
  id: number;


  constructor(private service: AdService, private toastr: ToastrService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
     this.id = this.route.snapshot.params['id'];
     this.getById(this.id);
  }

  updateAd(): void{
    this.service.update(this.newAd);

    this.service.UpdatedAd$.subscribe(resp => {this.toastr.success("Uw advertentie is gewijzigd", "Gelukt"); this.router.navigate(['/userads'])})
    this.service.errorUpdated$.subscribe(err => this.toastr.error("niet gelukt"))

  }

  getById(id: number): void{
    this.service.getById(this.id)
    this.service.getById$.subscribe(g => this.newAd = g)
  }

}
