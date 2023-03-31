// https://juejin.cn/post/7087415807445041165
import { NodeItem } from 'src/app/types';

export function safeJSONParse<T>(jsonString: string, defaultValue = null): T {
  try {
    return JSON.parse(jsonString) as T;
  } catch (e) {
    console.error('error format json', e);
    return defaultValue;
  }
}
