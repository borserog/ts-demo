import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { DealFormDialog } from '../deal-dialog/deal-form-dialog.component';

@Component({
  selector: 'ts-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [DealFormDialog, AsyncPipe],
})
export class MainComponent {}
