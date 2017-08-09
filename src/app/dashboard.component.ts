import { Component, OnInit } from '@angular/core';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
  values = '';

  onKey(event: any) { // without type info
    this.values += event.target.value + '-';
  }
  // onKey(event: KeyboardEvent) { // with type info
  //   this.values += (<HTMLInputElement>event.target).value + ' | ';
  // }
  value = '';
  onEnter(value: string) { this.value = value; }

  books = ['Angular', 'Node', 'Vue', 'React'];
  addHero(newBook: string) {
    if (newBook) {
      this.books.push(newBook);
    }
  }

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  
}
console.log("hallo ✋🏻")