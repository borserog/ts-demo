import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { DealFormComponent } from '../deal-form/deal-form.component';
import { AsyncPipe, DOCUMENT } from '@angular/common';

@Component({
  selector: 'ts-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [DealFormComponent, AsyncPipe],
})
export class MainComponent {}
