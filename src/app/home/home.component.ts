import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventEmitter } from "protractor";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
})
export class HomeComponent {
	constructor(private router: Router) {}

	loadMembers(organization: string) {
		this.router.navigate(["members"], { queryParams: { organization } });
	}
}
