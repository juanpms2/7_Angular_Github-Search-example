import { Component } from "@angular/core";
import { MemberEntity } from "@app/models";
import { MembersApiService } from "@app/services";
import { ActivatedRoute, Router } from "@angular/router";

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
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit() {
		this.route.queryParams.subscribe((params) => {
			this.company = params.organization;
			this.memberService.getAllMembers(this.company).subscribe(
				(arrayMembers) => {
					this.membersCard = arrayMembers;
					this.router.navigate(["members"], { queryParams: { ...params } });
				},
				(error) => console.log(error)
			);
		});
	}

	ngOnDestroy() {}
}
