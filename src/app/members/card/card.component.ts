import { Component, Input } from "@angular/core";
import { MemberEntity } from "@app/models";

@Component({
	selector: "app-card",
	templateUrl: "./card.component.html",
	styleUrls: ["./card.component.css"],
})
export class CardComponent {
	@Input() memberCard: MemberEntity;
}
