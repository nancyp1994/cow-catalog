import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CowListTable } from './cow-list-table';

describe('CowListTable', () => {
  let component: CowListTable;
  let fixture: ComponentFixture<CowListTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CowListTable],
    }).compileComponents();

    fixture = TestBed.createComponent(CowListTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
