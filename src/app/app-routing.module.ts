import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from 'src/app/register/register.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login', 
    pathMatch: 'full' 
  },
  {
    path : 'login',
    component: RegisterComponent
  },
  {
    path: 'task-module',
    loadChildren: () => import('./task-component/task-component.module').then(m => m.TaskComponentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
