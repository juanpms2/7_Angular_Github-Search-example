import { Component, Output, EventEmitter, Input } from "@angular/core";
import { MemberEntity } from "@app/models";
import { MembersApiService } from "@app/services";

@Component({
	selector: "app-members",
	templateUrl: "./members.component.html",
	styleUrls: ["./members.component.css"],
})
export class MembersComponent {
	members: MemberEntity[];
	company: string = "lemoncode";

	constructor(private membersApi: MembersApiService) {}

	loadMembers(organization: string) {
		this.company = organization;
		console.log("holaaaa");
		this.membersApi.getAllMembers(this.company).subscribe(
			(ms) => (this.members = ms),
			(error) => console.log(error)
		);
	}
}
