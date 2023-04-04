import { Component } from "@angular/core";
import { NzModalService } from "ng-zorro-antd/modal";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private modal: NzModalService) {}
  ngOnInit(): void {
    // this.modal.confirm({
    //   nzTitle: "Are you sure delete this profile?",
    //   nzContent: "profileName",
    //   nzOkText: "Yes",
    //   nzOkType: "primary",
    //   nzOkDanger: true,
    //   nzOnOk: () => {
    //     console.log("ok");
    //   },
    //   nzCancelText: "No"
    // });
  }
}
