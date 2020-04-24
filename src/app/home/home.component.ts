import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
})
export class HomeComponent {
	@Output() organization: EventEmitter<string> = new EventEmitter<string>();

	constructor(private router: Router) {}

	sendCompanyToLoadMembers(company: string) {
		this.organization.emit(company);
		this.router.navigate(["members"]);
	}
}
