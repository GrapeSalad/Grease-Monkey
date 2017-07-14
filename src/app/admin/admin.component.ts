import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Bike } from '../bike.model';
import { MemberService } from '../member.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {
  
  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(title: string, name: string, bikes: Bike){
    var newMember = new Member(title, name, bikes);
    this.memberService.addMember(newMember);
  }

}
