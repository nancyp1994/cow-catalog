import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CowCreateModal } from './cow-create-modal';

describe('CowCreateModal', () => {
  let component: CowCreateModal;
  let fixture: ComponentFixture<CowCreateModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CowCreateModal],
    }).compileComponents();

    fixture = TestBed.createComponent(CowCreateModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
