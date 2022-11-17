import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { MainComponent } from './components/main/main.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { SupportComponent } from './components/support/support.component';


const routes: Routes = [
  {
    path: '', component: MainComponent,  children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
    ]
  },
  {
    path: 'admin', 
    loadChildren: () => import('./components/admin/admin.module').then(x => x.AdminModule),
  },
  {
    path: 'office', 
    loadChildren: () => import('./components/office/office.module').then(x => x.OfficeModule),
  },
  {
    path: 'support', component: SupportComponent
  },
  {
    path: 'resources', component: ResourcesComponent
  },
  {
    path: 'info', component: InfoComponent
  },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
