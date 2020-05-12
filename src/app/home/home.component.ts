import { Component } from "@angular/core";
import { MembersApiService } from "@app/services";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
})
export class HomeComponent {
	constructor(private load: MembersApiService) {}

	loadMembers(organization: string) {
		this.load.loadMembers(organization);
	}
}
