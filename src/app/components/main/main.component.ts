import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { DealFormComponent } from '../deal-form/deal-form.component';
import { AsyncPipe, DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ts-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [DealFormComponent, AsyncPipe],
})
export class MainComponent implements AfterViewInit {
  static readonly dealFormDialogId = 'deal-form-dialog';
  dialog = inject(MatDialog);
  toggleDialog$ = new BehaviorSubject(false);
  private readonly docRef = inject(DOCUMENT);

  ngAfterViewInit() {
    this.openDealFormDialog();
  }

  openDealFormDialog() {
    (
      this.docRef.getElementById(
        MainComponent.dealFormDialogId
      ) as HTMLDialogElement
    ).showModal();
  }

  onDialogClose() {
    this.toggleDialog$.next(false);
  }
}
