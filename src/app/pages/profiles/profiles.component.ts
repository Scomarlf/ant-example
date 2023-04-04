import { Component, OnInit } from "@angular/core";
import { ipcRenderer } from "electron";
import { NzModalService } from "ng-zorro-antd/modal";

@Component({
  selector: "app-profiles",
  templateUrl: "./profiles.component.html",
  styleUrls: ["./profiles.component.scss"]
})
export class ProfilesComponent implements OnInit {
  constructor(private modal: NzModalService) {}

  ngOnInit(): void {
    ipcRenderer.on("profiles", (event, operator, profileName) => {
      console.log("delete");
      this.modal.confirm({
        nzTitle: "Are you sure delete this profile?",
        nzContent: "profileName",
        nzOkText: "Yes",
        nzOkType: "primary",
        nzOkDanger: true,
        nzOnOk: () => {
          console.log("ok");
        },
        nzCancelText: "No"
      });
    });
  }

  ngOnDestroy(): void {
    ipcRenderer.removeAllListeners("profiles");
  }
}
