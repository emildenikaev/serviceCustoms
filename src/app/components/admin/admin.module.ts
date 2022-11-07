import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { AdminPageComponent } from "./admin-page/admin-page.component";
import { AdminLayoutComponent } from "./shared/components/admin-layout/admin-layout.component";
import { AuthService } from "./shared/services/auth.service";

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/admin-login', pathMatch: "full"},
          {path: 'admin-login', component: AdminLoginComponent},
          {path: 'admin-page', component: AdminPageComponent}
        ]
      }
    ])
  ],
  exports: [RouterModule],
  providers: [AuthService]
})

export class AdminModule {

}