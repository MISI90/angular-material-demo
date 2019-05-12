import {Component, OnInit} from '@angular/core';
import {HeroModel} from '../hero.model';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  heroes: HeroModel[] = [{
    id: 1,
    age: 13,
    name: 'Adam',
    bio: 'Super Stefan elo',
    heros: [{
      id: 1,
      age: 13,
      name: 'Paweł',
      bio: 'Super Stefan elo',
      heros: [{
        id: 1,
        age: 13,
        name: 'Kartofel',
        bio: 'Super Stefan elo',
        heros: [{
          id: 1,
          age: 13,
          name: 'Adam 2',
          bio: 'Super Stefan elo',
          heros: []
        }]
      }]
    }]
  }, {
    id: 1,
    age: 13,
    name: 'Marek',
    bio: 'Super Stefan elo',
    heros: []
  }, {
    id: 1,
    age: 13,
    name: 'Jarek',
    bio: 'Super Stefan elo',
    heros: [{
      id: 1,
      age: 13,
      name: 'Adam 3',
      bio: 'Super Stefan elo',
      heros: [{
        id: 1,
        age: 13,
        name: 'Paaaaweł',
        bio: 'Super Stefan elo',
        heros: []
      }]
    }]
  }, {
    id: 1,
    age: 13,
    name: 'Zbychu',
    bio: 'Super Stefan elo',
    heros: []
  }, {
    id: 1,
    age: 13,
    name: 'Marek',
    bio: 'Super Stefan elo',
    heros: [{
      id: 1,
      age: 13,
      name: 'Alefajnie',
      bio: 'Super Stefan elo',
      heros: [{
        id: 1,
        age: 13,
        name: 'Siema',
        bio: 'Super Stefan elo',
        heros: []
      }]
    }]
  }];

  searchValue: string;
  searchValueSubject: Subject<string> = new Subject<string>();

  constructor() {
  }

  ngOnInit() {
    this.searchValueSubject
      .pipe(
        debounceTime(500)
      )
      .subscribe(n => this.handleSearch(n));
  }

  searchValueChange(value: string) {
    this.searchValueSubject.next(value);
  }

  handleSearch(value: string) {
    console.log(value);
    this.closeAll();
    this.searchAll(this.heroes, value);
  }

  private searchAll(heroes: HeroModel[], value: string) {
    for (const hero of heroes) {
      hero.expanded = this.searchNode(hero.heros, value);
    }
  }

  private searchNode(nodes: HeroModel[], searchValue: string): boolean {
    for (const node of nodes) {
      console.log('checking: ' + node.name);
      node.expanded = this.searchNode(node.heros, searchValue);
      if (node.name.toLowerCase().includes(searchValue.toLowerCase()) || node.expanded) {
        console.log('checking: ' + node.name + ':true');
        return true;
      }
    }
    // console.log('checking: ' + node.name + ':true');
    return false;
  }

  closeAll() {
    for (const hero of this.heroes) {
      this.closeNode(hero);
    }
  }

  closeNode(element: HeroModel) {
    element.expanded = false;
    if (element.heros.length > 0) {
      for (const hero of element.heros) {
        this.closeNode(hero);
      }
    }
  }
}
