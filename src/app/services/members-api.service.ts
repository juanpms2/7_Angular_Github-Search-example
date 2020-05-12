import { Injectable, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, Subject } from "rxjs";

import { MemberEntity, createDefaultMemberEntity } from "@app/models";
import { Router } from "@angular/router";

@Injectable({
	providedIn: "root",
})
export class MembersApiService {
	members: MemberEntity[];
	company: string;

	constructor(private http: HttpClient, private router: Router) {}

	getAllMembers(organizationName: string): Observable<MemberEntity[]> {
		const gitHubMembersUrl = `https://api.github.com/orgs/${organizationName}/members`;
		return this.http.get<MemberEntity[]>(gitHubMembersUrl);
	}

	loadMembers(organization: string) {
		this.company = organization;
		this.getAllMembers(organization).subscribe(
			(arrayMembers) => {
				this.members = arrayMembers;
				this.router.navigate(["members"], { queryParams: { organization } });
			},
			(error) => console.log(error)
		);
	}
}
