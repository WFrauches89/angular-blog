import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink, MenuTitleComponent, MenuBarComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  private id: number | string | null = '';
  photoCover: string = '';
  cardTitle: string = '';
  cardDescription: string = '';
  cardAutor: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComp(this.id);
  }

  setValuesToComp(id: number | string | null) {
    const result = dataFake.filter((data) => data.id == id)[0];

    console.log(result);

    this.photoCover = result.photo;
    this.cardAutor = result.autor;
    this.cardTitle = result.title;
    this.cardDescription = result.description;
  }
}
