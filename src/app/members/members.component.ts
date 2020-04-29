import { Component } from "@angular/core";
import { MemberEntity } from "@app/models";

@Component({
	selector: "app-members",
	templateUrl: "./members.component.html",
	styleUrls: ["./members.component.css"],
})
export class MembersComponent {
	membersCard: MemberEntity[];
	userCard: MemberEntity;
	company: string;

	sendMembersToCard(members: MemberEntity[]) {
		this.membersCard = members;
	}

	getCompany(company) {
		this.company = company;
	}
}
