import { Routes } from "@angular/router";
import { HomeComponent } from "@app/home/home.component";
import { MembersComponent } from "@app/members/members.component";
import { MemberDetailsComponent } from "./members/member-details/member-details.component";

export const appRoutes: Routes = [
	{
		path: "home",
		component: HomeComponent,
	},
	{
		path: "",
		redirectTo: "/home",
		pathMatch: "full",
	},
	{
		path: "members",
		component: MembersComponent,
	},
	{
		path: "members/:organization",
		component: MembersComponent,
	},
	{
		path: "user",
		component: MemberDetailsComponent,
	},
	{
		path: "user/:login",
		component: MemberDetailsComponent,
	},
];
