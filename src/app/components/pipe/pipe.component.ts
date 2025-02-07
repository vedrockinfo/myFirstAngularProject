import { DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  imports: [JsonPipe, UpperCasePipe, LowerCasePipe, DatePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  mySub:string = "angular";
  dated: Date = new Date();
  stud: any = {
    Name:'Vedant Gupta',
    Designation:'Frontend Developer',
    Company:'GETI',
    Address:{
      City:"Lucknow",
      State:"Uttar Pradesh",
      Country:"India",
    }
  }
}
