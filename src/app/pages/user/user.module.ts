import { NgModule } from '@angular/core';

import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserRoutingModule } from './user-routing.module';
import {
    NzFormModule, NzButtonModule, NzInputModule, NzGridModule, NzTableModule, NzUploadModule,
    NzIconModule, NzBreadCrumbModule, NzSwitchModule, NzSelectModule,
    NzPageHeaderModule, NzDescriptionsModule,
    NzListModule,
    NzModalModule,
    NzNotificationService,
    NzDatePickerModule
  } from 'ng-zorro-antd';
  
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@NgModule({
    imports: [
        UserRoutingModule,
        ReactiveFormsModule,
        CommonModule,
        
        FormsModule,

        NzGridModule,
        NzFormModule,
        NzIconModule,
        NzListModule,
        NzInputModule,
        NzTableModule,
        NzModalModule,
        NzUploadModule,
        NzSwitchModule,
        NzButtonModule,
        NzSelectModule,
        NzDatePickerModule,
        NzBreadCrumbModule,
        NzPageHeaderModule,
        NzDescriptionsModule,
    ],
    exports: [],
    declarations: [
        UserListComponent,
        UserFormComponent
    ],
    providers: [
        NzNotificationService,
        UserService
    ],
})
export class UserModule { }
