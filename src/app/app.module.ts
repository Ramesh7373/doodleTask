import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from '../app/register/register.component';
import { SharedModuleModule } from 'src/app/common/shared-module/shared-module.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CalculatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModuleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
