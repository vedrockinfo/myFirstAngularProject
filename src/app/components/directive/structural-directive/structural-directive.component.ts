import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
  isDiv1Visible:boolean=true;
  isDiv2Toggle:boolean=true;
  num1:string = '';
  num2:string = '';
  isActive:boolean = true;
  ifSelected:string="USA";
  cityArray:string[]=['Lko', 'USA', 'Pune', 'Philipines', 'Peru', 'Maldives'];
  studentList:any[]=[
    {studId:1, Name:"Vedant", City:"Lucknow", isActive:false},
    {studId:2, Name:"Ashitosh", City:"Barabanki", isActive:false},
    {studId:3, Name:"Manish", City:"Kanpur", isActive:true},
    {studId:4, Name:"Amar", City:"Noida", isActive:false},
    {studId:5, Name:"Anas", City:"Delhi", isActive:false}
  ];
  showDiv1(){
    this.isDiv1Visible = true;
  }
  hideDiv1(){
    this.isDiv1Visible = false;
  }
  toggleDiv2(){
    this.isDiv2Toggle =! this.isDiv2Toggle;
  }
}
