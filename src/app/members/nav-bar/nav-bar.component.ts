import { Component, Output, EventEmitter } from "@angular/core";
import { MemberEntity } from "@app/models";
import { MembersApiService } from "@app/services";
import { Router } from "@angular/router";

@Component({
	selector: "app-nav-bar",
	templateUrl: "./nav-bar.component.html",
	styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent {
	@Output() members = new EventEmitter<MemberEntity[]>();
	@Output() company = new EventEmitter<string>();

	constructor(private membersApi: MembersApiService, private router: Router) {}

	loadMembers(organization: string) {
		this.company.emit(organization);
		this.router.navigate(["members"], { queryParams: { organization } });
		this.membersApi.getAllMembers(organization).subscribe(
			(arrayMembers) => this.members.emit(arrayMembers),
			(error) => console.log(error)
		);
	}
}
