import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TaskComponentRoutingModule } from './task-component-routing.module';
import { TaskComponentComponent } from './task-component.component';


@NgModule({
  declarations: [TaskComponentComponent],
  imports: [
    CommonModule,
    TaskComponentRoutingModule,
    ReactiveFormsModule
  ]
})
export class TaskComponentModule { }
