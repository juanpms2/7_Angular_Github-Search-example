import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { MembersModule } from "@app/members/members.module";

import { AppComponent } from "./app.component";

import { appRoutes } from "./app.routes";
import { MembersApiService } from "./services";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		MembersModule,
		RouterModule.forRoot(appRoutes),
	],
	providers: [MembersApiService],
	bootstrap: [AppComponent],
})
export class AppModule {}
