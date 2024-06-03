import { Component } from '@angular/core';

import { User } from './types/user';
import { CardsComponent } from './cards/cards.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardsComponent, ThemeSwitchComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  theme: string = 'black';

  users: User[] = [
    {
      name: 'Light Yagami',
      avatar: 'https://static.zerochan.net/Yagami.Light.full.2322304.jpg',
      description:
        'Light is characterized as hardworking, talented, and a natural genius. However, his high intelligence, academic achievements, and constant praise from adults laid the foundation for an innate hubris and arrogance that quickly escalated after he adopted the role of Kira. ',
      backgroundColor: 'aliceblue',
    },

    {
      name: 'L',
      avatar:
        'https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/10/Deathnote-Feature.jpg',
      description:
        "Secretive, meticulous and cunning, L's desire to win coupled with his intellect give him the reputation of being the best detective in the world",
      backgroundColor: 'aliceblue',
    },
  ];
  onChangeBgc(theme: string) {
    this.theme =theme;
    this.users[0].backgroundColor =theme;
    this.users[1].backgroundColor =theme;
  }
}
