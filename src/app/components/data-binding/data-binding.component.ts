import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule, RouterLink],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName:string="DEVI Sansthan";
  inputType = "radio";
  rollNo:number = 123;
  inIndian:boolean = true;
  currentDate:Date= new Date();
  selectState:string = "Pune";
  firstName = signal("Vedant Gupta");

  constructor(){

  }
  changeCourseName(){
    this.courseName = "Target Plus";
    this.firstName.set("Vedant at Dignity");
  }
  showAlert(message:string){
    alert(message);
  }
}
