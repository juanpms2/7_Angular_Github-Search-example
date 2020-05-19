import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MemberEntity, UserEntity } from "@app/models";

@Injectable({
	providedIn: "root",
})
export class MembersApiService {
	constructor(private http: HttpClient) {}

	getAllMembers(organizationName: string): Observable<MemberEntity[]> {
		const gitHubMembersUrl = `https://api.github.com/orgs/${organizationName}/members`;
		return this.http.get<MemberEntity[]>(gitHubMembersUrl);
	}

	getUser(login: string): Observable<UserEntity> {
		const gitHubUserUrl = `https://api.github.com/users/${login}`;
		return this.http.get<UserEntity>(gitHubUserUrl);
	}
}
