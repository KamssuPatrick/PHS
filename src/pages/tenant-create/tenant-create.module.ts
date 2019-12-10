import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { TenantCreatePage } from './tenant-create';

@NgModule({
  declarations: [
    TenantCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(TenantCreatePage),
    TranslateModule.forChild()
  ],
  exports: [
    TenantCreatePage
  ]
})
export class TenantCreatePageModule { }
