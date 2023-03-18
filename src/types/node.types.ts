export interface Nodes {
  id: string;
  name: string;
  level: number;
  children: Nodes[];
  type: 'FILE' | 'DIR';
  expanded: boolean;
  valueList?: string[]; // every `FILE` type node has values.
}
