import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { Cow, CowFacade } from '@cow/data-access';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFormOptions, FormlyModule } from '@ngx-formly/core';
import { CowCreateFields } from './cow-create-fields';

@Component({
  selector: 'cow-create-modal',
  imports: [DialogModule, ButtonModule, FormlyModule, ReactiveFormsModule],
  templateUrl: './cow-create-modal.html',
  styleUrl: './cow-create-modal.css',
})
export class CowCreateModal implements OnChanges, OnInit {
  @Input()
  display: boolean = false;

  @Output()
  displayChange = new EventEmitter<boolean>();

  model: Partial<Cow> = {};
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  fields = CowCreateFields;

  facade = inject(CowFacade);

  ngOnChanges(): void {
    if (this.display) {
      this.resetModal();
    }
  }

  ngOnInit(): void {
    this.resetModal();
  }

  onSaveCow() {
    const newCow = { ...this.model, lastUpdated: new Date() } as Cow;
    if (this.form.valid) {
      try {
        this.facade.addCow(newCow);
        this.displayChange.emit(false);
      } catch (error) {
        console.error('Error adding cow:', error);
      }
    }
  }

  onCancel() {
    this.displayChange.emit(false);
  }

  resetModal() {
    this.model = { status: 'Active' };
    this.form.reset();
    this.options.resetModel?.(this.model);
  }
}
