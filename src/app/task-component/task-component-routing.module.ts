import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskComponentComponent } from './task-component.component';

const routes: Routes = [{ path: '', component: TaskComponentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskComponentRoutingModule { }
