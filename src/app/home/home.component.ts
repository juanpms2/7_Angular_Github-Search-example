import { Component, Output, EventEmitter } from "@angular/core";
import { MemberEntity } from "@app/models";
import { MembersApiService } from "@app/services";
import { Router } from "@angular/router";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
})
export class HomeComponent {
	members: MemberEntity[];
	company: string;

	constructor(private membersApi: MembersApiService, private router: Router) {}

	loadMembers(organization: string) {
		this.company = organization;

		this.membersApi.getAllMembers(organization).subscribe(
			(arrayMembers) => (this.members = arrayMembers),
			(error) => console.log(error)
		);
		this.router.navigate(["members"], {
			queryParams: { organization },
		});
	}
}
