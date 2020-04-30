import { Component, Output, EventEmitter } from "@angular/core";
import { MembersApiService } from "@app/services";
import { MemberEntity } from "@app/models";
import { Observable } from "rxjs";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
})
export class HomeComponent {
	@Output() members: MemberEntity[];
	@Output() company: string;

	constructor(private load: MembersApiService) {}

	loadMembers(organization: string) {
		this.load.loadMembers(organization);
	}
}
