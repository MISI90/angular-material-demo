import {TreeNodeModel} from './tree-node.model';

export class HeroModel implements TreeNodeModel {
  id: number;
  name: string;
  age: number;
  bio: string;
  heros: HeroModel[] = [];
  expanded?: boolean = false;
}
