import { Component, OnInit } from "@angular/core";
import { Profile } from "src/app/core/service/profiles.service";

@Component({
  selector: "app-profiles-list",
  templateUrl: "./profiles-list.component.html",
  styleUrls: ["./profiles-list.component.scss"]
})
export class ProfilesListComponent implements OnInit {
  profiles: Profile[] = [
    {
      id: "1",
      name: "test",
      type: "file",
      createTimestamp: 1,
      updateTimestamp: 1
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
