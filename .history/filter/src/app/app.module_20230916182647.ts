import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { CountEmployeesComponent } from './components/employees-list/count-employees/count-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    CountEmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
