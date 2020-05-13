import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserEntity, createDefaultUserEntity } from "@app/models";
import { Router, ActivatedRoute } from "@angular/router";
import { MembersApiService } from "../members-api.service";
import { Subscription } from "rxjs";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
	selector: "app-member-details",
	templateUrl: "./member-details.component.html",
	styleUrls: ["./member-details.component.css"],
})
export class MemberDetailsComponent implements OnInit, OnDestroy {
	user: UserEntity = createDefaultUserEntity();
	userLogin: string;
	company: string;
	subscription: Subscription;
	error: string;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private userApi: MembersApiService,
		private spinner: NgxSpinnerService
	) {}

	ngOnInit() {
		this.spinner.show();
		this.subscription = this.route.queryParams.subscribe((params) => {
			params.login ? this.spinner.show() : undefined;
			this.userLogin = params.login;
			this.userApi.getUser(this.userLogin).subscribe(
				(userData) => {
					this.user = { ...userData };
					this.spinner.hide();
					this.router.navigate(["user"], { queryParams: { ...params } });
				},
				(error) => {
					console.log(error);
					this.error = `El usuario o compañía ${this.company} no existe en nuestra base de datos: ${error.json}`;
					this.spinner.hide();
				}
			);
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
