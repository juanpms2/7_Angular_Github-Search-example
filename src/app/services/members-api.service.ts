import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { MemberEntity } from "@app/models";
import { Router } from "@angular/router";

@Injectable({
	providedIn: "root",
})
export class MembersApiService {
	// members: MemberEntity[];
	// company: string;

	constructor(
		private http: HttpClient
	) // private membersApi: MembersApiService,
	// private router: Router
	{}

	getAllMembers(organizationName: string): Observable<MemberEntity[]> {
		const gitHubMembersUrl = `https://api.github.com/orgs/${organizationName}/members`;
		return this.http.get<MemberEntity[]>(gitHubMembersUrl);
	}

	// loadMembers(organization: string) {
	// 	this.company = organization;
	// 	this.router.navigate(["members"], { queryParams: { organization } });
	// 	this.membersApi.getAllMembers(organization).subscribe(
	// 		(arrayMembers) => (this.members = arrayMembers),
	// 		(error) => console.log(error)
	// 	);
	// }
}
