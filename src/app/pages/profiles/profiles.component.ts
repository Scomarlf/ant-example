import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ipcRenderer } from "electron";
import { getLogger } from "log4js";
import { NzModalService } from "ng-zorro-antd/modal";

@Component({
  selector: "app-profiles",
  templateUrl: "./profiles.component.html",
  styleUrls: ["./profiles.component.scss"]
})
export class ProfilesComponent implements OnInit {
  @ViewChild("list", { static: true })
  listElement!: ElementRef;
  @ViewChild("drag", { static: true })
  dragElement!: ElementRef;

  dragging = false;
  draggingForOrder = false;

  private logger = getLogger("ProfilesComponent");

  constructor(private modal: NzModalService) {}

  ngOnInit(): void {
    this.bindDragEvent();
    this.handleContextMenu();
  }

  /**
   * for
   * 1. order
   * 2. add local profile
   */
  bindDragEvent(): void {}

  handleContextMenu(): void {
    ipcRenderer.on("profiles", (event, operator, profileName) => {
      this.logger.info("profiles context menu:", operator, profileName);
      switch (operator) {
        case "delete":
          console.log("delete");
          this.modal.confirm({
            nzTitle: "Are you sure delete this profile?",
            nzContent: profileName,
            nzOkText: "Yes",
            nzOkType: "primary",
            nzOkDanger: true,
            nzOnOk: () => {
              console.log("ok");
            },
            nzCancelText: "No"
          });
          break;
      }
    });
  }

  ngOnDestroy(): void {
    ipcRenderer.removeAllListeners("profiles");
  }
}
