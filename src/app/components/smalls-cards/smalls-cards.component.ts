import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-smalls-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './smalls-cards.component.html',
  styleUrl: './smalls-cards.component.css',
})
export class SmallsCardsComponent {
  @Input()
  id: number | string = '';
  @Input()
  photoCoverSmall: string = '';
  @Input()
  cardTitleSmall: string = '';
  @Input()
  cardDescritpionSmall: string = '';
}
