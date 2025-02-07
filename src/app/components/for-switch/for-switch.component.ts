import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for-switch',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './for-switch.component.html',
  styleUrl: './for-switch.component.css'
})
export class ForSwitchComponent {
  dayName:string= '';
  cityArray:string[]=['Lko', 'USA', 'Pune', 'Philipines', 'Peru', 'Maldives'];
  studentList:any[]=[
    {studId:1, Name:"Vedant", City:"Lucknow", isActive:false},
    {studId:2, Name:"Ashitosh", City:"Barabanki", isActive:false},
    {studId:3, Name:"Manish", City:"Kanpur", isActive:true},  
    {studId:4, Name:"Amar", City:"Noida", isActive:false},
    {studId:5, Name:"Anas", City:"Delhi", isActive:false}
  ];
}
