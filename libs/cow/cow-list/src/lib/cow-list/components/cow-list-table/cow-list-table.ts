import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Cow, CowFacade } from '@cow/data-access';
import { ButtonModule } from 'primeng/button';
import { TableModule, TableRowSelectEvent } from 'primeng/table';
import { CowCreateModal } from '../cow-create-modal/cow-create-modal';
import { Router } from '@angular/router';

@Component({
  selector: 'cow-list-table',
  imports: [TableModule, DatePipe, ButtonModule, CowCreateModal],
  templateUrl: './cow-list-table.html',
  styleUrl: './cow-list-table.css',
})
export class CowListTable {
  cowFacade = inject(CowFacade);
  router = inject(Router);

  cows: Cow[] = this.cowFacade.getAllCows();
  showModal = false;

  filters = {
    id: '',
    pen: '',
    status: '',
  };

  openModal() {
    this.showModal = true;
  }

  modalStatusChanged(display: boolean) {
    this.showModal = display;
    if (!display) {
      this.cows = this.cowFacade.getAllCows();
    }
  }

  onSearch(term: string) {
    this.cowFacade.loadFiltered({ search: term });
    this.cows = this.cowFacade.getFilteredCows();
  }

  openCowDetails(event: TableRowSelectEvent<Cow>) {
    const cow = (event as any).data as Cow;
    this.router.navigate(['/cow', cow.id]);
  }
}
