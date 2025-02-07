import { Component, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  imports: [],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css',
  encapsulation: ViewEncapsulation.None
})
export class KeyboardComponent implements AfterViewInit {
  @ViewChild('keyboardContainer', { static: false }) keyboardContainer!: ElementRef;
  keys: string[] = "1234567890qwertyuiopasdfghjklzxcvbnm".split("");

  ngAfterViewInit(): void {
    this.keys.forEach((key) => {
      let keyDiv = document.createElement("div");
      keyDiv.classList.add("key");

      let keyElement = document.createElement("i");
      keyElement.setAttribute("data-key", key);
      keyElement.innerText = key.toUpperCase();

      keyDiv.appendChild(keyElement);
      this.keyboardContainer.nativeElement.appendChild(keyDiv);

      // add line break after specific key 

      if (key === "0" || key === "p" || key === "l" ) {
        let linebreak = document.createElement("div");
        linebreak.classList.add("break");
        this.keyboardContainer.nativeElement.appendChild(linebreak);
      } 
    });
  }
}
