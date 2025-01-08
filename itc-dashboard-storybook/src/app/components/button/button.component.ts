import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button [type]="type" (click)="handleClick()">
      {{ label }}
    </button>
  `,
  styles: [
    `
      button {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        color: white;
        background-color: blue;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      button:hover {
        background-color: darkblue;
      }
    `
  ]
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() type: 'button' | 'submit' = 'button';

  handleClick(): void {
    console.log('Button clicked!');
  }
}
