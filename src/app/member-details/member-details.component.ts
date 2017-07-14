import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from '../member.model';
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

  constructor(private route: ActivatedRoute, private location: Location, private memberService: MemberService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = urlParameters['id'];
    });
    this.memberService.getMemberById(this.memberId).subscribe(dataLastEmittedFromObserver => {
      this.memberToDisplay = new Member(dataLastEmittedFromObserver.title, dataLastEmittedFromObserver.name);
      console.log(this.memberToDisplay);
    })
    // this.memberService.getMemberBikes(this.memberId);
  }

}
