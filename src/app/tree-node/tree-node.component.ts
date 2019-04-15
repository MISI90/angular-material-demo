import {Component, Input, OnInit} from '@angular/core';
import {HeroModel} from '../hero.model';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {

  @Input() model: HeroModel[];

  constructor() {
  }

  ngOnInit() {
    console.log('init');
  }

  toggle(node: HeroModel) {
    node.expanded = !node.expanded;
  }

}
