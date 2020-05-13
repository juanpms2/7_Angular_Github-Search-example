import { Component, OnDestroy, OnInit } from "@angular/core";
import { MemberEntity } from "@app/models";
import { MembersApiService } from "./members-api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject, Subscription } from "rxjs";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
	selector: "app-members",
	templateUrl: "./members.component.html",
	styleUrls: ["./members.component.css"],
})
export class MembersComponent implements OnInit, OnDestroy {
	company: string;
	membersCard: MemberEntity[];
	subscription: Subscription;
	subject: Subject<any>;
	error: string;

	constructor(
		private memberService: MembersApiService,
		private route: ActivatedRoute,
		private router: Router,
		private spinner: NgxSpinnerService
	) {}

	ngOnInit() {
		this.spinner.show();
		this.subscription = this.route.queryParams.subscribe((params) => {
			params.organization ? this.spinner.show() : undefined;
			this.company = params.organization;
			this.memberService.getAllMembers(this.company).subscribe(
				(arrayMembers) => {
					this.membersCard = arrayMembers;
					this.spinner.hide();
					this.router.navigate(["members"], { queryParams: { ...params } });
				},
				(error) => {
					console.log(error);
					error = { ...error };
					this.error = error.message;
					this.spinner.hide();
				}
			);
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
