import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NzModalModule } from "ng-zorro-antd/modal";
import { ProfilesComponent } from "./profiles.component";

@NgModule({
  declarations: [ProfilesComponent],
  imports: [CommonModule, BrowserModule, NzModalModule]
})
export class ProfilesModule {}
