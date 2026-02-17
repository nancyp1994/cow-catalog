import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule],
  template: `<h3>Welcome to Cow Catalog App!</h3>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {}
