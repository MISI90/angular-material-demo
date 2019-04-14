import {Component, OnInit} from '@angular/core';
import {HeroModel} from '../hero.model';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  heroes: HeroModel[] = [{
    id: 1,
    age: 13,
    name: 'Stefan',
    bio: 'Super Stefan elo',
    heros: [{
      id: 1.1,
      age: 13,
      name: 'Stefan',
      bio: 'Super Stefan elo',
      heros: []
    }, {
      id: 1.2,
      age: 13,
      name: 'Stefan',
      bio: 'Super Stefan elo',
      heros: []
    }]
  }, {
    id: 2,
    age: 13,
    name: 'Stefan',
    bio: 'Super Stefan elo',
    heros: [],
  }, {
    id: 3,
    age: 13,
    name: 'Stefan',
    bio: 'Super Stefan elo',
    heros: [{
      id: 3.1,
      age: 13,
      name: 'Stefan',
      bio: 'Super Stefan elo',
      heros: []
    }, {
      id: 3.2,
      age: 13,
      name: 'Stefan',
      bio: 'Super Stefan elo',
      heros: []
    }, {
      id: 3.3,
      age: 13,
      name: 'Stefan',
      bio: 'Super Stefan elo',
      heros: []
    }]
  }, {
    id: 4,
    age: 13,
    name: 'Stefan',
    bio: 'Super Stefan elo',
    heros: []
  }];


  constructor() {
  }

  ngOnInit() {
  }

}
