import { Component } from '@angular/core';

@Component({
  selector: 'ts-section-card',
  standalone: true,
  imports: [],
  template: `
    <section class="card shadow-2xl p-6 border-[1px] border-slate-300 w-full">
      <ng-content></ng-content>
    </section>
  `,
})
export class SectionCardComponent {}
