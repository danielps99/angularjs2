import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowErrorDirective } from './show-error.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShowErrorDirective],
  exports: [ShowErrorDirective] 
})
export class SharedModule { }
