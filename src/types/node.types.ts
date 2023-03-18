export interface Nodes {
  id: string;
  name: string;
  children: Nodes[];
  type: 'FILE' | 'DIR';
  valueList?: string[]; // every `FILE` type node has values.
}
