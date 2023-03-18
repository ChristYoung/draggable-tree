export interface Nodes {
  id: string;
  name: string;
  level: number;
  children: Nodes[];
  type: 'FILE' | 'DIR';
  expanded?: boolean; // 只供前端展示使用, 后端返回的数据中不包含此字段
  valueList?: string[]; // every `FILE` type node has values.
}
