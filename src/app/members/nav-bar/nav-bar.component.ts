import { Component, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "app-nav-bar",
	templateUrl: "./nav-bar.component.html",
	styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent {
	@Output() organization: EventEmitter<string> = new EventEmitter<string>();

	sendCompanyToLoadMembers(company: string) {
		this.organization.emit(company);
		console.log(company);
	}
}
