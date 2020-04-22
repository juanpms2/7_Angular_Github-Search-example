import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { MembersModule } from "./members/members.module";
import { HomePageComponent } from "./scenes/home-page/home-page.component";
import { MembersPageComponent } from "./scenes/members-page/members-page.component";
import { UserPageComponent } from "./scenes/user-page/user-page.component";
import { appRoutes } from "@app/core/routes/app.routes";

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		MembersPageComponent,
		UserPageComponent,
	],
	imports: [BrowserModule, MembersModule, RouterModule.forRoot(appRoutes)],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
