import { Component } from '@angular/core';
import { SmallsCardsComponent } from '../../components/smalls-cards/smalls-cards.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SmallsCardsComponent,
    MenuBarComponent,
    BigCardComponent,
    MenuTitleComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
