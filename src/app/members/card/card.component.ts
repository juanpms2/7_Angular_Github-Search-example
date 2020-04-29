import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { MemberEntity, UserEntity } from "@app/models";
import { map } from "rxjs/operators";
import { UserApiService } from "@app/services";

@Component({
	selector: "app-card",
	templateUrl: "./card.component.html",
	styleUrls: ["./card.component.css"],
})
export class CardComponent {
	@Input() memberCard: MemberEntity;
	@Input() userCard: UserEntity[];

	constructor(private router: Router) {}

	navigateToUser(login) {
		this.router.navigate(["user"], {
			queryParams: { login },
		});
	}
}
