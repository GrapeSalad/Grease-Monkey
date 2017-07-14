import { Component, Input, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;

  editMemberButton: boolean = true;
  editMemberForm: boolean = false;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  beginUpdatingMember(memberToUpdate){
    this.memberService.updateMember(memberToUpdate);
  }

  beginDeletingMember(memberToDelete){
    if(confirm("This will delete the member from the database, there is no recovery function")){
      this.memberService.deleteMember(memberToDelete);
      this.editMemberButton = true;
    }
  }

  finishEditingMember(){
    this.editMemberButton = true;
    this.editMemberForm = false;
  }

  editThisMember(){
    this.editMemberButton = false;
    this.editMemberForm = true;
  }

}
