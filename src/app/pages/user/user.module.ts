import { NgModule } from '@angular/core';

import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
    imports: [],
    exports: [],
    declarations: [
        UserListComponent,
        UserFormComponent
    ],
    providers: [],
})
export class UserModule { }
