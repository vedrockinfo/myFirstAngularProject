import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';
import { IfelsepracticeComponent } from './components/ifelsepractice/ifelsepractice.component';
import { ForSwitchComponent } from './components/for-switch/for-switch.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { FromvalidationComponent } from './components/fromvalidation/fromvalidation.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { GetAPIComponent } from './components/get-api/get-api.component';
import { NgtemplateComponent } from './components/ngtemplate/ngtemplate.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { APIHttpClientComponent } from './components/api-http-client/api-http-client.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'keyboard',
        pathMatch:'full'
    },
    {
        path:'keyboard',
        component:KeyboardComponent
    },
    {
        path:'add-employee',
        component:AddEmployeeComponent    
    },
    {
        path:'calculator',
        component:CalculatorComponent
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
    },
    {
        path:'for-switch',
        component:ForSwitchComponent
    },
    {
        path:'pipe',
        component:PipeComponent
    },
    {
        path:'fromvalidation',
        component:FromvalidationComponent
    },
    {
        path:'reactive',
        component:ReactiveComponent
    },
    {
        path:'ngtemplate',
        component:NgtemplateComponent
    },
    {
        path:'get-api',
        component:GetAPIComponent
    },
    {
        path:'app-api-http-client',
        component:APIHttpClientComponent
    }
];
