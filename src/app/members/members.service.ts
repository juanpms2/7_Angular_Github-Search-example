// import { Injectable } from "@angular/core";

// import { MemberEntity } from "@app/models";
// import { Router } from "@angular/router";
// import { MembersApiService } from "@app/services";
// import { Observable } from "rxjs";

// @Injectable()
// export class MembersService {
// 	members: MemberEntity[];
// 	company: string;

// 	constructor(private getMembers: MembersApiService, private router: Router) {}

// 	loadMembers(organization: string) {
// 		this.company = organization;
// 		this.getMembers.getAllMembers(organization).subscribe(
// 			(arrayMembers) => {
// 				this.members = arrayMembers;
// 				return arrayMembers;
// 			},
// 			(error) => {
// 				console.log(error);
// 				return error;
// 			}
// 		);
// 	}
// }
