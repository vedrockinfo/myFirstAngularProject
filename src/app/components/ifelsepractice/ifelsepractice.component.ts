import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelsepractice',
  imports: [FormsModule],
  templateUrl: './ifelsepractice.component.html',
  styleUrl: './ifelsepractice.component.css'
})
export class IfelsepracticeComponent {
  div1Visible:boolean = true;
  div2Visible:boolean = true;
  num1:string='';
  num2:string='';
  selectStatus:string=''
  showDiv1(){
    this.div1Visible=true
  }
  showDiv2(){
    this.div1Visible=false
  }
  toggleDiv(){
    this.div2Visible=!this.div2Visible;
  }
}

