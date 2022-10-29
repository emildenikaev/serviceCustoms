import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { OfficeLayoutComponent } from "./shared/components/office-layout/office-layout.component";
import { AuthService } from "./shared/services/auth.service";

@NgModule({
  declarations: [
    OfficeLayoutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: OfficeLayoutComponent, children: [
          {path: '', redirectTo: '/office/login', pathMatch: "full"},
          {path: 'login', component: LoginComponent},
          {path: 'dashboard', component: DashboardComponent}
        ]
      }
    ])
  ],
  exports: [RouterModule],
  providers: [AuthService]
})

export class OfficeModule {

}