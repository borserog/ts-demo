import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'termsheet-demo-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: ` <button class="btn btn-primary">Hello!</button>
    <p>a bunch of text to test things</p>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
