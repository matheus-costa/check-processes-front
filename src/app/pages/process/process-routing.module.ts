import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessListComponent } from './process-list/process-list.component';
import { ProcessFormComponent } from './process-form/process-form.component';

const routes: Routes = [
  { path: '', component: ProcessListComponent },
  { path: 'new', component: ProcessFormComponent },
  { path: 'edit/:id', component: ProcessFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }
