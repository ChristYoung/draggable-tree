export interface NodeItem {
  id: string;
  name: string;
  level: number;
  children: NodeItem[];
  type: 'FILE' | 'DIR';
  expanded?: boolean; // only use for FE.
  valueList?: string[]; // every `FILE` type node has values.
}
