import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { MemberEntity } from "@app/models";

@Component({
	selector: "app-card",
	templateUrl: "./card.component.html",
	styleUrls: ["./card.component.css"],
})
export class CardComponent {
	@Input() memberCard: MemberEntity;

	constructor(private router: Router) {}

	navigateToUser(login) {
		this.router.navigate(["user"], {
			queryParams: { login },
		});
	}
}
