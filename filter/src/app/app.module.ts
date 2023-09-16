import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { CountEmpleadosComponent } from './components/employees-list/count-empleados/count-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    CountEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
