import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmallsCardsComponent } from './components/smalls-cards/smalls-cards.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SmallsCardsComponent,
    MenuBarComponent,
    BigCardComponent,
    MenuTitleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-blog';
}
