import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes: Heroe[] = [
    {
          name: 'Aquaman',
          biography: 'Aquaman is most recognized power is the telepathic ability to communicate with marine life',
          img: 'assets/img/aquaman.png',
          appeared: '1941-11-01',
          home: 'DC'
        },
        {
          name: 'Batman',
          biography: 'The main traits of Batman are summarized in: physical dexterity, deductive abilities and obsession',
          img: 'assets/img/batman.png',
          appeared: '1939-05-01',
          home: 'DC'
        },
        {
          name: 'Hulk',
          biography: 'His main power is his ability to increase his strength to practically unlimited levels while increasing',
          img: 'assets/img/hulk.png',
          appeared: '1962-05-01',
          home: 'Marvel'
        },
        {
          name: 'Spider-Man',
          biography: 'After being bitten by a radioactive spider, he obtained the following superhuman powers: great strength, agility',
          img: 'assets/img/spiderman.png',
          appeared: '1962-08-01',
          home: 'Marvel'
        }
  ];

  constructor() { 
    console.log('service is working');
  }

  getHeroes(){
    return this.heroes;
  }
}

export interface Heroe {
  name: string;
  biography: string;
  img: string;
  appeared: string;
  home: string;
}
