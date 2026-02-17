import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CowService } from './cow-service';

describe('Service', () => {
  let component: CowService;
  let fixture: ComponentFixture<CowService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CowService],
    }).compileComponents();

    fixture = TestBed.createComponent(CowService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
