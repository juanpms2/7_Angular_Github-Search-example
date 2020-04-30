import { Component, OnInit, Input } from "@angular/core";
import { MemberEntity } from "@app/models";
import { MembersApiService } from "@app/services";
import { Observable } from "rxjs";

@Component({
	selector: "app-members",
	templateUrl: "./members.component.html",
	styleUrls: ["./members.component.css"],
})
export class MembersComponent implements OnInit {
	membersCard: MemberEntity[];
	userCard: MemberEntity;
	company: string;

	constructor(private apiServices: MembersApiService) {}

	ngOnInit() {
		this.membersCard = this.apiServices.members;
		this.company = this.apiServices.company;
	}

	onChange() {
		this.membersCard = this.apiServices.members;
		this.company = this.apiServices.company;
	}
}
