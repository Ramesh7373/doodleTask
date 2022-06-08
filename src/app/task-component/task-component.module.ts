import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskComponentRoutingModule } from './task-component-routing.module';
import { TaskComponentComponent } from './task-component.component';
import { SharedModuleModule } from 'src/app/common/shared-module/shared-module.module';
import { CompletedComponent } from './completed/completed.component';


@NgModule({
  declarations: [TaskComponentComponent, CompletedComponent],
  imports: [
    CommonModule,
    TaskComponentRoutingModule,
    ReactiveFormsModule,
    SharedModuleModule
  ]
})
export class TaskComponentModule { }
