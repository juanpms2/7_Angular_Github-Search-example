import { Component } from "@angular/core";
import { MemberEntity } from "@app/models";
import { MembersApiService } from "@app/common";

@Component({
	selector: "app-members-table",
	templateUrl: "./members-table.component.html",
	styles: [],
})
export class MembersTableComponent {
	members: MemberEntity[];
	organization: string;

	constructor(private membersApi: MembersApiService) {}

	loadMembers(organization) {
		this.membersApi.getAllMembers(organization).subscribe(
			(ms) => (this.members = ms),
			(error) => console.log(error)
		);
		console.log("hola");
	}
}
