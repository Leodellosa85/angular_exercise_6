import { Component, HostBinding, Input } from '@angular/core';
import { ButtonStyle } from './button-style';
import { ButtonSize } from './button-size';
import { ButtonShape } from './button-shape';
import { ButtonColor } from './button-color';

@Component({
  selector: 'div[myButton],span[myButton],a[myButton],input[myButton],button[myButton]',
  template: '<ng-content></ng-content>',
  styleUrl: './button-list.component.scss'
})
export class ButtonListComponent {
  @Input('style') style: ButtonStyle;

  @Input('size') size: ButtonSize;

  @Input('shape') shape: ButtonShape;

  @Input('color')color: ButtonColor;

  constructor() {
    this.style = ButtonStyle.SOLID;
    this.size = ButtonSize.MEDIUM;
    this.shape = ButtonShape.ROUNDED;
    this.color = ButtonColor.DEFAULT;
  }

  @HostBinding('class')
  get classes(): string {
    return `${this.style} ${this.size} ${this.shape} ${this.color}`
  }
}
