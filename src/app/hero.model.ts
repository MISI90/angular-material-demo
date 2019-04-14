import {TreeNodeModel} from './tree-node.model';

export class HeroModel implements TreeNodeModel {
  id: number;
  name: string;
  age: number;
  bio: string;
  heros: HeroModel[] = [];
  hierarchy = String(this.id);
  label = this.hierarchy + ' - ' + this.name;
  nodes = this.heros;


}
