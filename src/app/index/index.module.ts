import { PanelWrapperComponent } from '../panel-wrapper.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { RegFormComponent } from './reg-form/reg-form.component';
import { FormlyFieldCustomInput } from '../inline-text.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FormlyFieldTabs } from '../tabs.component';
import { RepeatTypeComponent } from '../repitition-section.component';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    HeaderComponent,
    RegFormComponent,
    FormlyFieldCustomInput,
    PanelWrapperComponent,
    RepeatTypeComponent,
    FooterComponent,
    LoginComponent,
    FormlyFieldTabs,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
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
    CommonModule,
  ],
})
export class IndexModule {}

