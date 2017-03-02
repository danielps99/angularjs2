import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputDescriptionComponent } from './input-description/input-description.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [InputDescriptionComponent],
  exports: [InputDescriptionComponent]
})
export class SharedModule { }
