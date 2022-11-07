import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
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
  }

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
