import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { HomeComponent } from './components/home/home/home.component';
import { XploradorComponent } from './components/xplorador/xplorador.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', // If no path selected. Default
    component: HomeComponent, 
  },
  {
    path: 'home', // If Home selected. Default
    component: HomeComponent, 
  },
  {
    path: 'xplore', // If Home selected. Default
    component: XploradorComponent, 
  },
  {
    path: 'login', // If Home selected. Default
    component: LoginComponent, 
  },
  {
    path: 'dashboard', // If Home selected. Default
    component: DashboardComponent, 
  },
  {
    path: 'employees', // If employee selected. 
    component: EmployeesListComponent
  },
  {
    path: 'home/employees',
    component: EmployeesListComponent
  },
  {
    path: 'employees/add',
    component: AddEmployeeComponent
  },
  {
    path: 'employees/edit/:id',
    component: EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
