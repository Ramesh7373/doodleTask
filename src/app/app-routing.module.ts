import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from 'src/app/calculator/calculator.component';
import { CompletedComponent } from 'src/app/task-component/completed/completed.component';
import { RegisterComponent } from '../app/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: RegisterComponent
  },
  {
    path: 'task-module',
    loadChildren: () => import('./task-component/task-component.module').then(m => m.TaskComponentModule)
  },
  {
    path: 'completed',
    component: CompletedComponent
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
