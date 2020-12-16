import { Component, OnInit } from '@angular/core';
import { AdService } from 'src/app/services/ad.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent{

  constructor(private service : AdService) { }

  ads$ = this.service.getAll();
}
