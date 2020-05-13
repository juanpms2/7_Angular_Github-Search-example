import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CardComponent } from "./card/card.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { MemberDetailsComponent } from "./member-details/member-details.component";
import { NgxSpinnerModule } from "ngx-spinner";
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
		BrowserAnimationsModule,
		HttpClientModule,
		RouterModule,
		NgxSpinnerModule,
		// RouterModule.forChild([{ path: ":id", component: MemberDetailsComponent }]),
	],
	providers: [],
	exports: [
		CardComponent,
		NavBarComponent,
		MembersComponent,
		MemberDetailsComponent,
	],
})
export class MembersModule {}
