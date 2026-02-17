import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cow, cowSeed } from '@cow/data-access';

const STORAGE_KEY = 'cows';
@Injectable({
  providedIn: 'root',
})
export class CowService {
  private cowSubject = new BehaviorSubject<Cow[]>(this.loadCows());
  cows$ = this.cowSubject.asObservable();

  private filterState = {
    search: '',
    status: '',
    pen: '',
  };

  // get all cows from local storage
  getAllCows() {
    return this.cowSubject.value;
  }

  // get cow by id
  getCowById(id: number): Cow | undefined {
    return this.getAllCows().find((cow) => cow.id === id);
  }

  //crud operations : add, update

  addCow(cow: Cow) {
    const cows = this.getAllCows();
    const existingCow = cows.some((c) => {
      return String(c.id).trim() === String(cow.id).trim();
    });
    if (existingCow) {
      alert(`Cow with id ${cow.id} already exists.`);
      return;
    }

    cows.push(cow);
    this.updateCows(cows);
  }

  //filter cows based on search, status and pen
  setFilters(filters: Partial<typeof this.filterState>) {
    this.filterState = { ...this.filterState, ...filters };
  }

  getFilteredCows(): Cow[] {
    const { search, status, pen } = this.filterState;
    return this.getAllCows().filter((cow) => {
      (!search ||
        cow.id.toString().includes(search) ||
        cow.pen.includes(search)) &&
        (!status || cow.status === status) &&
        (!pen || cow.pen === pen);
    });
  }

  private updateCows(cows: Cow[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cows));
    this.cowSubject.next(cows);
  }

  private loadCows(): Cow[] {
    const cowsJson = localStorage.getItem(STORAGE_KEY);
    if (cowsJson) {
      return JSON.parse(cowsJson);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(cowSeed));
    return cowSeed;
  }
}
