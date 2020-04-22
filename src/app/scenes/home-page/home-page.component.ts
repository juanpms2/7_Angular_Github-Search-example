import { Component } from "@angular/core";
import { MemberEntity } from "@app/models";
import { MembersApiService } from "@app/common";

@Component({
	selector: "app-home-page",
	templateUrl: "./home-page.component.html",
	styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent {
	members: MemberEntity[];

	constructor(private membersApi: MembersApiService) {}

	loadMembers() {
		this.membersApi.getAllMembers("lemoncode").subscribe(
			(ms) => (this.members = ms),
			(error) => console.log(error)
		);
	}
}
