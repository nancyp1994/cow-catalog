import { Component } from '@angular/core';
import { CowListTable } from './components/cow-list-table/cow-list-table';

@Component({
  selector: 'cow-list',
  imports: [CowListTable],
  templateUrl: './cow-list.html',
  styleUrl: './cow-list.css',
})
export class CowList {}
