import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'input-description',
  templateUrl: './input-description.component.html',
  styleUrls: ['./input-description.component.css']
})
export class InputDescriptionComponent {

  @ViewChild('ngModelError') ngModelError: NgModel;
  @Output('output') mudouValor = new EventEmitter();
  @Output('error') eventError = new EventEmitter();
  @Input('input') set value(inputValue: String) {
    this.mudouValor.emit(inputValue);
    this.eventError.emit(this.ngModelError);
  }
  @Input() label: string;
  @Input() name: string;
  @Input() minLength = 3;
  @Input() maxLength = 127;
  @Input() isRequired = false;
}
