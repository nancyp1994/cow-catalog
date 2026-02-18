import { Component, inject } from '@angular/core';
import { map, filter } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CowFacade } from '@cow/data-access';
import { switchMap } from 'rxjs/operators';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'lib-cow-detail',
  imports: [CardModule, TimelineModule, DatePipe, CommonModule],
  templateUrl: './cow-detail.html',
  styleUrl: './cow-detail.css',
})
export class CowDetail {
  route = inject(ActivatedRoute);
  cowFacade = inject(CowFacade);
  id$ = this.route.paramMap.pipe(map((params) => Number(params.get('id'))));

  cow$ = this.id$.pipe(
    switchMap(async (id) => this.cowFacade.getCowById(id)),
    filter((cow) => cow !== undefined),
  );
  events$ = this.cow$.pipe(map((cow) => cow.events));
}
