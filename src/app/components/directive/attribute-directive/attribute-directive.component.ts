import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  isDiv1Color:string = "bg-danger";

  bgBlueColor(){
    this.isDiv1Color = "bg-secondary"
  }
  bgGreenColor(){
    this.isDiv1Color = "bg-success"
  }
}
