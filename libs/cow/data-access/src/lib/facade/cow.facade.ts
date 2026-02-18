import { inject, Injectable } from '@angular/core';
import { CowService } from '../services/cow-service';
import { map } from 'rxjs';
import { Cow } from '../models/cow.model';

@Injectable({ providedIn: 'root' })
export class CowFacade {
  cowService = inject(CowService);
  cows$ = this.cowService.cows$;
  filteredCows$ = this.cows$.pipe(map(() => this.cowService.getFilteredCows()));

  getAllCows() {
    return this.cowService.getAllCows();
  }

  getCowById(id: number) {
    return this.cowService.getCowById(id);
  }

  addCow(cow: Cow) {
    return this.cowService.addCow(cow);
  }

  loadFiltered(
    filters: Partial<{ search: string; status: string; pen: string }>,
  ) {
    this.cowService.setFilters(filters);
  }

  getFilteredCows() {
    return this.cowService.getFilteredCows();
  }
}
