import { Routes } from "@angular/router";
import { HomeComponent } from "@app/home/home.component";
import { MembersComponent } from "@app/members/members.component";

export const appRoutes: Routes = [
	{
		path: "home",
		component: HomeComponent,
	},
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full",
	},
	{
		path: "members",
		component: MembersComponent,
	},
	{
		path: ":company",
		component: MembersComponent,
	},
];
