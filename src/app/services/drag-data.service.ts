// transfer drag data.
import { Injectable } from '@angular/core';
import { NodeItem } from 'src/app/types';
import { BehaviorSubject, Observable } from 'rxjs';
import { getPathByNodeId, safeJSONParse } from '../utils/data-transfer.util';

@Injectable({
  providedIn: 'root'
})
export class DragDataService {

  private _dragData: NodeItem;

  clearDragData(): void {
    this._dragData = null;
  }

  setDragData(dragData: NodeItem): void {
    const allNodes = safeJSONParse<NodeItem[]>(sessionStorage.getItem('allNodes'));
    const path = getPathByNodeId(dragData.id, allNodes);
    dragData.path = path;
    this._dragData = dragData;
  }

  getDragData(): NodeItem {
    return this._dragData;
  }

  constructor() { }
}
