import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() color: string = 'gray';
  @Input() text: string = 'button';
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }

}
