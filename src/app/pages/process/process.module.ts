import { NgModule } from '@angular/core';
import { ProcessListComponent } from './process-list/process-list.component';
import { ProcessRoutingModule } from './process-routing.module';
import { ProcessService } from 'src/app/services/process.service';
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
import { ProcessFormComponent } from './process-form/process-form.component';


@NgModule({
    imports: [
        ProcessRoutingModule,
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
        ProcessListComponent,
        ProcessFormComponent
    ],
    providers: [
        ProcessService,
        NzNotificationService
    ],
})
export class ProcessModule { }
