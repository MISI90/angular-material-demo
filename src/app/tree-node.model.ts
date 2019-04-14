export interface TreeNodeModel {
  hierarchy?: string;
  label?: string;
  expanded?: boolean;
  nodes?: TreeNodeModel[];
}
