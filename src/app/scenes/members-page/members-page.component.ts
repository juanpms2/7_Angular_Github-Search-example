import { Component, Input } from '@angular/core';
import { MemberEntity } from '@app/models';

@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.css']
})
export class MembersPageComponent {

  @Input() member: MemberEntity;

}
