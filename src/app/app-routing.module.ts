import { IndexComponent } from './index/index.component';
import { LoginComponent } from './index/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=> import('./index/index.module').then(m=>m.IndexModule),
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'admin',
    loadChildren: ()=> import('./admin/admin.module').then(m=>m.AdminModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
