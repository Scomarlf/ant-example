import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NzModalModule } from "ng-zorro-antd/modal";
import { ProfilesListModule } from "./profiles-list/profiles-list.module";
import { ProfilesComponent } from "./profiles.component";

@NgModule({
  declarations: [ProfilesComponent],
  imports: [CommonModule, BrowserModule, ProfilesListModule, NzModalModule]
})
export class ProfilesModule {}
