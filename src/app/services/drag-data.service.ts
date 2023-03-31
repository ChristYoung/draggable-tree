// transfer drag data.
import { Injectable } from '@angular/core';
import { NodeItem } from 'src/app/types';
import { safeJSONParse } from '@utils';

@Injectable({
  providedIn: 'root'
})
export class DragDataService {

  private _dragData: NodeItem;
  private _allNodes: NodeItem[];

  constructor() { }

  private getNodePathById(id: string, totalData: NodeItem[]): string {
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

  clearDragData(): void {
    this._dragData = null;
  }

  setDragData(dragData: NodeItem): void {
    const path = this.getNodePathById(dragData.id, this.getAllNodes());
    dragData.path = path;
    this._dragData = dragData;
  }

  getDragData(): NodeItem {
    return this._dragData;
  }

  setAllNodes(nodes: NodeItem[]): void {
    this._allNodes = [...nodes];
  }

  getAllNodes(): NodeItem[] {
    return this._allNodes;
  }

}
