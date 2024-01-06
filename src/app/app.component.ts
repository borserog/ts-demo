import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MainComponent } from './components/main/main.component';
import { DialogModule } from '@angular/cdk/dialog';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MainComponent],
  selector: 'termsheet-demo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'termsheet-demo';
}
