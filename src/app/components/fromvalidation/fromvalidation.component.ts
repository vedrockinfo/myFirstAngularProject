import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fromvalidation',
  imports: [FormsModule, JsonPipe, CommonModule],
  templateUrl: './fromvalidation.component.html',
  styleUrl: './fromvalidation.component.css'
})
export class FromvalidationComponent {
  studentObj:any = {
    firstName :'',
    lastName : '',
    userName :'',
    city:'',
    state:'',
    zip:'',
    isAgreeterms : false,
  }

  formValue:any;
  onSubmit(){
    debugger;
    this.formValue = this.studentObj;
  }
  resetForm(){
    this.studentObj = {
      firstName :'',
      lastName : '',
      userName :'',
      city:'',
      state:'',
      zip:'',
      isAgreeterms : false,
    }
  }
}
