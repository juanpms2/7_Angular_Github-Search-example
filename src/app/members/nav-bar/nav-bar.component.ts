import { Component, Output, Input, EventEmitter } from "@angular/core";
import { MembersApiService } from "@app/services";
import { MemberEntity } from "@app/models";

@Component({
	selector: "app-nav-bar",
	templateUrl: "./nav-bar.component.html",
	styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent {
	@Output() members: EventEmitter<MemberEntity[]>;
	@Output() company: EventEmitter<string>;

	constructor(private load: MembersApiService) {}

	loadMembers(organization: string) {
		this.load.loadMembers(organization);
	}
}
