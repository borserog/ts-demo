import { Component, inject } from '@angular/core';
import { DealFormComponent } from '../deal-form/deal-form.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ts-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [DealFormComponent],
})
export class MainComponent {
  static readonly dealFormDialogId = 'deal-form-dialog';
  private readonly docRef = inject(DOCUMENT);

  openDealFormDialog() {
    (
      this.docRef.getElementById(
        MainComponent.dealFormDialogId
      ) as HTMLDialogElement
    ).showModal();
  }
}
