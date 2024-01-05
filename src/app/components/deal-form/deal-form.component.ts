import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'ts-deal-form',
  standalone: true,
  imports: [],
  templateUrl: './deal-form.component.html',
  styleUrl: './deal-form.component.css',
})
export class DealFormComponent {
  protected readonly MainComponent = MainComponent;
}
