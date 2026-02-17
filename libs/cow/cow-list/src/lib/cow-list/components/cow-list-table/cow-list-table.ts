import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Cow, CowFacade } from '@cow/data-access';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CowCreateModal } from '../cow-create-modal/cow-create-modal';

@Component({
  selector: 'cow-list-table',
  imports: [TableModule, DatePipe, ButtonModule, CowCreateModal],
  templateUrl: './cow-list-table.html',
  styleUrl: './cow-list-table.css',
})
export class CowListTable {
  cowFacade = inject(CowFacade);

  cows: Cow[] = this.cowFacade.getAllCows();

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  modalStatusChanged(display: boolean) {
    this.showModal = display;
    if (!display) {
      this.cows = this.cowFacade.getAllCows();
    }
  }
}
