import { Component, OnInit, EventEmitter, Input } from "@angular/core";
import { UserEntity, MemberEntity } from "@app/models";
import { Router, ActivatedRoute } from "@angular/router";
import { UserApiService } from "@app/services";

@Component({
	selector: "app-member-details",
	templateUrl: "./member-details.component.html",
	styleUrls: ["./member-details.component.css"],
})
export class MemberDetailsComponent implements OnInit {
	user: UserEntity[];
	members = new EventEmitter<MemberEntity[]>();
	userLogin: string;
	company: string;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private userApi: UserApiService
	) {}

	loadUser(login: string) {
		this.userApi.getUser(login).subscribe(
			(ms) => (this.user = ms),
			(error) => console.log(error)
		);
		console.log(this.user);
	}

	// redirectToMembers(company: string) {
	// 	this.router.navigate(["members"], { queryParams: { company } });
	// }

	ngOnInit() {
		this.route.queryParams.subscribe(
			(params) => (this.userLogin = params.login)
		);
		this.loadUser(this.userLogin);
	}
}
