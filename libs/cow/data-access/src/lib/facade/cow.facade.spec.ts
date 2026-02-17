import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CowFacade } from './cow.facade';

describe('CowFacade', () => {
  let component: CowFacade;
  let fixture: ComponentFixture<CowFacade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CowFacade],
    }).compileComponents();

    fixture = TestBed.createComponent(CowFacade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
