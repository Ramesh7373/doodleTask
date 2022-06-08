import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/common/shared-module/header/header.component';



@NgModule({
  declarations: [HeaderComponent],
  exports : [HeaderComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModuleModule { }
