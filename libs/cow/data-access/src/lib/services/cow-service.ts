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
  getCowById(id: number) {
    return this.getAllCows().find((cow) => cow.id === id);
  }

  //crud operations : add, update

  addCow(cow: Cow) {
    const cows = this.getAllCows();
    const existingCow = cows.some((c) => {
      return String(c.id) === String(cow.id);
    });
    if (existingCow) {
      alert(`Cow with id ${cow.id} already exists.`);
      return;
    }
    if (cow.id <= 0) {
      alert('Cow ID must be a positive integer.');
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
      const matechesSearch =
        !search || cow.id.toString().includes(search.trim());

      const matchesPen = !pen || cow.pen == pen;

      const matchesStatus = !status || cow.status === status;

      return matechesSearch && matchesPen && matchesStatus;
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
