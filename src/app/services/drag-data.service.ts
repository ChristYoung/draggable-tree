// transfer drag data.
import { Injectable } from '@angular/core';
import { NodeItem } from '@types';
import { BehaviorSubject, Observable } from 'rxjs';
import { getPathByNodeId, safeJSONParse } from '../utils/data-transfer.util';

@Injectable({
  providedIn: 'root'
})
export class DragDataService {

  private _dragData$: BehaviorSubject<NodeItem> = new BehaviorSubject<NodeItem>(null);

  clearDragData(): void {
    this._dragData$.next(null);
  }

  setDragData(dragData: NodeItem): void {
    const allNodes = safeJSONParse<NodeItem[]>(sessionStorage.getItem('allNodes'));
    const path = getPathByNodeId(dragData.id, allNodes);
    dragData.path = path;
    this._dragData$.next(dragData);
  }

  getDragData$(): Observable<any> {
    return this._dragData$.asObservable();
  }

  constructor() { }
}
