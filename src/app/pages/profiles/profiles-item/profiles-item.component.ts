import { Component, Input, OnInit } from "@angular/core";
import { Profile } from "src/app/core/service/profiles.service";

@Component({
  selector: "app-profiles-item",
  templateUrl: "./profiles-item.component.html",
  styleUrls: ["./profiles-item.component.scss"]
})
export class ProfilesItemComponent implements OnInit {
  @Input()
  fileProfile: Profile = {
    id: "1",
    name: "test",
    type: "file",
    createTimestamp: 1,
    updateTimestamp: 1
  };

  type: string = "unknown";

  constructor() {}
  ngOnInit(): void {}
}
