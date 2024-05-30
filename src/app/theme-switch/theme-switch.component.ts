import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.css',
})
export class ThemeSwitchComponent {
  @Input() theme: string = 'red';
  @Output() themeChange = new EventEmitter<string>();

 
}
