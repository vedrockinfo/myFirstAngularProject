import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';
import { IfelsepracticeComponent } from './components/ifelsepractice/ifelsepractice.component';

export const routes: Routes = [
    {
        path:'add-employee',
        component:AddEmployeeComponent    
    },
    {
        path:'data-binding',
        component:DataBindingComponent    
    },
    {
        path:'employee-list',
        component:EmployeeListComponent
    },
    {
        path:'Attribute-dir',
        component:AttributeDirectiveComponent
    },
    {
        path:'Structural-Dir',
        component:StructuralDirectiveComponent
    },
    {
        path:'ifElse-Statement',
        component:IfelsepracticeComponent
    }
];
