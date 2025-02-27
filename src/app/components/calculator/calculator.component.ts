import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  currentInput: string = '';
  result: string = '';

  appendToInput(value: string): void {
    this.currentInput += value;
  }

  setOperation(operation: string): void {
    if (this.currentInput !== '' && !this.isLastCharacterOperator()) {
      this.currentInput += operation;
    }
  }

  calculateResult(): void {
    try {
      this.result = eval(this.currentInput);
    } catch (error) {
      this.result = 'Error';
    }
  }

  clearInput(): void {
    this.currentInput = '';
    this.result = '';
  }

  private isLastCharacterOperator(): boolean {
    const lastChar = this.currentInput[this.currentInput.length - 1];
    return ['+', '-', '*', '/'].includes(lastChar);
  }

  ngAfterViewInit(): void {
    const deg = 6;
    const hr = document.getElementById("hr");
    const mn = document.getElementById("mn");
    const sc = document.getElementById("sc");

    setInterval(() => {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;
      if (hr && mn && sc) {
        hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
      }
    }, 1000);
  }
}