import { Component, OnDestroy, OnInit } from "@angular/core";
import { MemberEntity } from "@app/models";
import { MembersApiService } from "./members-api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
	selector: "app-members",
	templateUrl: "./members.component.html",
	styleUrls: ["./members.component.css"],
})
export class MembersComponent implements OnInit, OnDestroy {
	company: string;
	members: MemberEntity[];
	subscription: Subscription;
	error: string;

	//props pagination
	page: number = 1;
	totalPage: Array<number> = [];
	increment: number = 4;
	init: number = 0;
	fin: number = this.init + this.increment;
	totalMember: number;
	membersCard: MemberEntity[];

	constructor(
		private memberService: MembersApiService,
		private route: ActivatedRoute,
		private router: Router,
		private spinner: NgxSpinnerService
	) {}

	calcTotalPage(value: number) {
		this.totalPage = [];
		for (let i = 0; i < value; i++) {
			this.totalPage.push(i);
		}
	}

	handleChange(value: number) {
		this.init = value * this.increment - 4;
		this.fin = value * this.increment;
		this.page = value;
		this.membersCard = this.members.slice(this.init, this.fin);
	}

	ngOnInit() {
		this.spinner.show();
		this.subscription = this.route.queryParams.subscribe((params) => {
			params.organization ? this.spinner.show() : undefined;
			this.company = params.organization;
			this.memberService.getAllMembers(this.company).subscribe(
				(arrayMembers) => {
					this.error = undefined;
					this.members = arrayMembers;
					this.totalMember = Math.round(arrayMembers.length / 4);
					this.calcTotalPage(this.totalMember);
					this.membersCard = arrayMembers.slice(this.init, this.fin);
					this.spinner.hide();
					this.router.navigate(["members"], { queryParams: { ...params } });
				},
				(error) => {
					console.log(error);
					error = { ...error };
					this.error = error.message;
					this.members = [];
					this.spinner.hide();
				}
			);
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
