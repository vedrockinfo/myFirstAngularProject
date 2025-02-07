import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  isDiv1Color:string = "box one";
  isDiv2Toggle:boolean = false;
  num1:string = "";
  num2:string = "";
  isActive:boolean = false;
  studentList:any[]=[
    {studId:1, totalMarks:"23", gender:"male", Name:"Vedant", City:"Lucknow", isActive:false},
    {studId:2, totalMarks:"53", gender:"female", Name:"Ashitosh", City:"Barabanki", isActive:false},
    {studId:3, totalMarks:"68", gender:"male", Name:"Manish", City:"Kanpur", isActive:true},
    {studId:4, totalMarks:"76", gender:"female", Name:"Amar", City:"Noida", isActive:false},
    {studId:5, totalMarks:"34", gender:"male", Name:"Anas", City:"Delhi", isActive:true}
  ];
  customStyle:any = {
    'background-color': 'red',
    'color' : 'white',
    'width' : '200px',
    'height': '200px',
    'border-radius' : '50%',
    'display' : 'grid',
    'place-content' : 'center',
    'font-weight' : 'bold',
    'text-transform' : 'uppercase'
  }

  bgBlueColor(){
    this.isDiv1Color = "bg two"
  }
  bgGreenColor(){
    this.isDiv1Color = "box one"
  }
  bgToggle(){
    this.isDiv2Toggle =! this.isDiv2Toggle;
  }
}
