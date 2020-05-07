import { Component, OnDestroy, OnInit } from "@angular/core";
import { MemberEntity } from "@app/models";
import { MembersApiService } from "@app/services";
// import { MembersService } from "../members/members.service";
import { Subject, Subscription, Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-members",
	templateUrl: "./members.component.html",
	styleUrls: ["./members.component.css"],
})
export class MembersComponent {
	company: string;
	membersCard: MemberEntity[];

	// userCard: MemberEntity;

	constructor(
		private memberService: MembersApiService,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.membersCard = this.memberService.members;
		this.company = this.memberService.company;
		this.route.queryParams.subscribe(() => {
			this.company = this.memberService.company;
			this.membersCard = this.memberService.members;
		});
	}

	ngOnDestroy() {}

	// onChange() {
	// 	this.company = this.memberService.company;
	// 	this.membersCard = this.apiServices.members;
	// }
}
