import {Component, Input, OnInit} from '@angular/core';
import {TreeNodeModel} from '../tree-node.model';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {

  @Input() nodes: TreeNodeModel[];

  constructor() {
  }

  ngOnInit() {
  }

}
