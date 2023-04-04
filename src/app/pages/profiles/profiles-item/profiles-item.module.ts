import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProfilesItemComponent } from "./profiles-item.component";

@NgModule({
  declarations: [ProfilesItemComponent],
  imports: [CommonModule],
  exports: [ProfilesItemComponent]
})
export class ProfilesItemModule {}
