import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page";

@NgModule({
	imports: [CommonModule, HttpClientModule],
	declarations: [HomePageComponent],
	exports: [HomePageComponent],
})
export class HomePageModule {}
