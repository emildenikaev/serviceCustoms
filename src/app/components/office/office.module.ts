import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon'

import { SharedModule } from "../shared/shared.module";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { OfficeLayoutComponent } from "./shared/components/office-layout/office-layout.component";
import { AuthService } from "./shared/services/auth.service";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { InterceptorService } from "./shared/services/interceptor.service";
import { AuthGuardService } from "./shared/services/auth-guard.service";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatSelectModule } from "@angular/material/select";
import { AnswerService } from "./shared/services/answer.service";
import { RecommendationsComponent } from "./recommendations/recommendations.component";

@NgModule({
  declarations: [
    OfficeLayoutComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRippleModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: OfficeLayoutComponent, children: [
          {path: '', redirectTo: '/office/login', pathMatch: "full"},
          {path: 'login', component: LoginComponent},
          {path: 'dashboard', component: DashboardComponent,
    canActivate:[AuthGuardService] },
          {path: 'analytics', component: AnalyticsComponent},
          {path: 'recommendations', component: RecommendationsComponent},
        ]
      }
    ])
  ],
  exports: [RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatRippleModule,
    MatSelectModule,
  MatSortModule,],
  providers: [AuthService, AnswerService,
    {provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true}],
  
})

export class OfficeModule {

}