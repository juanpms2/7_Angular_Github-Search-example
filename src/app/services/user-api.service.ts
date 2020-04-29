import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { UserEntity } from "@app/models";

@Injectable({
	providedIn: "root",
})
export class UserApiService {
	constructor(private http: HttpClient) {}

	getUser(login: string): Observable<UserEntity[]> {
		const gitHubUserUrl = `https://api.github.com/users/${login}`;
		return this.http.get<UserEntity[]>(gitHubUserUrl);
	}
}
