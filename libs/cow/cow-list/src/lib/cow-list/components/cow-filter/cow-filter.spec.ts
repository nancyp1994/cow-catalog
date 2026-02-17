import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CowFilter } from './cow-filter';

describe('CowFilter', () => {
  let component: CowFilter;
  let fixture: ComponentFixture<CowFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CowFilter],
    }).compileComponents();

    fixture = TestBed.createComponent(CowFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
