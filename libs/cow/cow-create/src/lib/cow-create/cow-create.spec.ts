import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CowCreate } from './cow-create';

describe('CowCreate', () => {
  let component: CowCreate;
  let fixture: ComponentFixture<CowCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CowCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(CowCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
