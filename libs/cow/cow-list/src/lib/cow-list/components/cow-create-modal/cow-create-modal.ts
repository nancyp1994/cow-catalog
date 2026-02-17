import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { Cow, CowFacade } from '@cow/data-access';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyForm, FormlyModule } from '@ngx-formly/core';
import { CowCreateFields } from './cow-create-fields';

@Component({
  selector: 'cow-create-modal',
  imports: [DialogModule, ButtonModule, FormlyModule, ReactiveFormsModule],
  templateUrl: './cow-create-modal.html',
  styleUrl: './cow-create-modal.css',
})
export class CowCreateModal {
  @Input()
  display: boolean = false;

  @Output()
  displayChange = new EventEmitter<boolean>();

  model: Cow = {
    id: 0,
    sex: '',
    pen: '',
    status: 'Active',
    lastUpdated: new Date(),
    events: [],
  };

  form = new FormGroup({});
  fields = CowCreateFields;

  facade = inject(CowFacade);

  onSaveCow() {
    if (this.form.valid) {
      try {
        this.facade.addCow(this.model);
        this.displayChange.emit(false);
      } catch (error) {
        console.error('Error adding cow:', error);
      }
    }
  }

  onCancel() {
    this.displayChange.emit(false);
  }
}
