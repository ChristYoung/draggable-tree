export interface NodeItem {
  id: string;
  name: string;
  level: number;
  children: NodeItem[];
  type: 'FILE' | 'DIR';
  path?: string;
  expanded?: boolean; // only use for FE.
  valueList?: ValueItem[]; // every `FILE` type node has values.
}

export interface ValueItem {
  key: string;
  value: number;
  checked?: boolean;
}
