import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
  studentFrom: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(""),
    userName: new FormControl("", [Validators.email]),
    city: new FormControl(""),
    state: new FormControl(""),
    zip: new FormControl(""),
    isAcceptTerms: new FormControl("")
  });

  formValue: any;

  onSave() {
    this.formValue = this.studentFrom.value;
  }
}
