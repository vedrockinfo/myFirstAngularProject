import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';
import { IfelsepracticeComponent } from './components/ifelsepractice/ifelsepractice.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBindingComponent, StructuralDirectiveComponent, IfelsepracticeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myFirstAngularProject';
}
