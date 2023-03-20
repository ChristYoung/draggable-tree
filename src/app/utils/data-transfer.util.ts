// https://juejin.cn/post/7087415807445041165
import { NodeItem } from 'src/app/types';

// get tree path by the node id.
export function getPathByNodeId(id: string, totalData: NodeItem[]): string {
  let result: NodeItem[] = [];
  let traverse = (curKey: string, path: NodeItem[], data: NodeItem[]) => {
    if (data.length === 0) {
      return;
    }

    for (let item of data) {
      path.push(item);
      if (item.id === curKey) {
        result = safeJSONParse(JSON.stringify(path));
        return;
      }

      const children = Array.isArray(item.children) ? item.children : [];
      traverse(curKey, path, children);
      path.pop();
    }
  };
  traverse(id, [], totalData);
  return result.map(r => r.name).join(' / ');
}

export function safeJSONParse<T>(jsonString: string, defaultValue = null): T {
  try {
    return JSON.parse(jsonString) as T;
  } catch (e) {
    console.error('error format json', e);
    return defaultValue;
  }
}
