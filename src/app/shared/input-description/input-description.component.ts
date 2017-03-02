import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'input-description',
  templateUrl: './input-description.component.html',
  styleUrls: ['./input-description.component.css']
})
export class InputDescriptionComponent {

  @Output('output') mudouValor = new EventEmitter();
  @Input('input') value: number;
  @Input() label: string;
  @Input() name: string;
  @Input() minLength = 3;
  @Input() maxLength = 127;
  @Input() isRequired = false;

  constructor() { }

  keyUp(event) {
    this.mudouValor.emit(this.value);
  }
}
