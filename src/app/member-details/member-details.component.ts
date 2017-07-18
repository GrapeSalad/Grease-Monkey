import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from '../member.model';
import { Bike } from '../bike.model';
import { MemberService } from '../member.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css'],
  providers: [MemberService]
})
export class MemberDetailsComponent implements OnInit {
  memberId: string;
  memberToDisplay;
  // memberBikes displays appropriately thanks to the combined efforts of Alyssa Moody and Joshua Fairchild (links in the readme)
  memberBikes: Bike[] = [];
  constructor(private route: ActivatedRoute, private location: Location, private memberService: MemberService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = urlParameters['id'];
    });
    this.memberService.getMemberById(this.memberId).subscribe(dataLastEmittedFromObserver => {
      if(dataLastEmittedFromObserver.bikes.length > 1){
        for(var i=0; i<= (dataLastEmittedFromObserver.bikes.length-1); i++){
          this.memberBikes.push(new Bike(dataLastEmittedFromObserver.bikes[i].make, dataLastEmittedFromObserver.bikes[i].model, dataLastEmittedFromObserver.bikes[i].displacement, dataLastEmittedFromObserver.bikes[i].year));
          console.log(this.memberBikes);
        }
      }
      else{
        this.memberBikes.push(new Bike(dataLastEmittedFromObserver.bikes[0].make, dataLastEmittedFromObserver.bikes[0].model, dataLastEmittedFromObserver.bikes[0].displacement, dataLastEmittedFromObserver.bikes[0].year));
      }
      this.memberToDisplay = new Member(dataLastEmittedFromObserver.title, dataLastEmittedFromObserver.name, this.memberBikes[0]);
    })
  }

}
