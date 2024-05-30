import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { User } from '../types/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  @Input({ required: true }) user!: User;
  @Output() changeBackround = new EventEmitter<User>();

  onChange(){
    this.changeBackround.emit(this.user)
  }
}
