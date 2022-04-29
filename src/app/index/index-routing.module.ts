import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegFormComponent } from './reg-form/reg-form.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'form',
        component: RegFormComponent,
      },
      {
        path: '',
        component: HomeComponent,
      },
      {
        path:'login',
        component:LoginComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}
