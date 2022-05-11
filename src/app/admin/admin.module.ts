import { QRCodeModule } from 'angularx-qrcode';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { QRCodeModule } from 'angular2-qrcode';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { PendingComponent } from './pending/pending.component';
import { ApprovedComponent } from './approved/approved.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataTablesModule } from 'angular-datatables';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { FormlyModule } from '@ngx-formly/core';
import { PanelWrapperComponent } from '../panel-wrapper.component';
import { FormlyFieldCustomInput } from '../inline-text.component';
import { RepeatTypeComponent } from '../repitition-section.component';
import { FormlyFieldTabs } from '../tabs.component';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { CertificateComponent } from './certificate/certificate.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    PendingComponent,
    ApprovedComponent,
    DashboardComponent,
    ViewComponent,
    EditComponent,
    CertificateComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DataTablesModule.forRoot(),
    ReactiveFormsModule,
    FormlyModule.forRoot({
      extras: { lazyRender: true },
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      wrappers: [
        { name: 'panel', component: PanelWrapperComponent },
      ],
      types: [
        {
          name: 'custom',
          component: FormlyFieldCustomInput,
          wrappers: ['form-field'],
        },
        { name: 'repeat', component: RepeatTypeComponent, },
        { name: 'tabs', component: FormlyFieldTabs, },        
      ],
    }),
    FormlyBootstrapModule,
    QRCodeModule
  ]
})
export class AdminModule { }
