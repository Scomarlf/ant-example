import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfilesComponent } from "./pages/profiles/profiles.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/profiles" },
  { path: "profiles", component: ProfilesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
