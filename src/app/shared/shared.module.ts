import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDescriptionComponent } from './input-description/input-description.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InputDescriptionComponent],
  exports: [InputDescriptionComponent]
})
export class SharedModule { }
