import { Routes } from "@angular/router";
import {
	HomePageComponent,
	MembersPageComponent,
	UserPageComponent,
} from "@app/scenes";
import { MembersTableComponent } from "@app/members/members-table";

export const appRoutes: Routes = [
	{
		path: "home",
		component: HomePageComponent,
	},
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full",
	},
	{
		path: "members",
		component: MembersPageComponent,
	},
	{
		path: "user",
		component: UserPageComponent,
	},
];
