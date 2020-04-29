import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { CardComponent } from "./card/card.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { MemberDetailsComponent } from "./member-details/member-details.component";

import { MembersApiService, UserApiService } from "@app/services";
import { ErrorEntity, MemberEntity, UserEntity } from "@app/models";
import { HomeComponent } from "@app/home/home.component";
import { MembersComponent } from "./members.component";

@NgModule({
	declarations: [
		HomeComponent,
		MembersComponent,
		CardComponent,
		NavBarComponent,
		MemberDetailsComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule,
		// RouterModule.forChild([{ path: ":id", component: MemberDetailsComponent }]),
	],
	providers: [MembersApiService, UserApiService],
	exports: [
		CardComponent,
		NavBarComponent,
		MembersComponent,
		MemberDetailsComponent,
	],
})
export class MembersModule {}
