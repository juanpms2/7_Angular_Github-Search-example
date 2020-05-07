import { Component } from "@angular/core";
import { MembersApiService } from "@app/services";

@Component({
	selector: "app-nav-bar",
	templateUrl: "./nav-bar.component.html",
	styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent {
	searchInput = "";
	constructor(private load: MembersApiService) {}

	loadMembers(organization: string) {
		this.load.loadMembers(organization);
	}
}
