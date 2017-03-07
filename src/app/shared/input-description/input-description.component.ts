import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-description',
  templateUrl: './input-description.component.html',
  styleUrls: ['./input-description.component.css']
})
export class InputDescriptionComponent {

  @Output('output') mudouValor = new EventEmitter();
  @Input('input') set value(inputValue: String) {
    this.mudouValor.emit(inputValue);
  }
  @Input() label: string;
  @Input() name: string;
  @Input() minLength = 3;
  @Input() maxLength = 127;
  @Input() isRequired = false;
}
