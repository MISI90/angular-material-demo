export abstract class TreeNodeModel {
  expanded?: boolean;

  abstract getLabel(): string;

  abstract getChilds(): TreeNodeModel[];
}
