// transfer drag data.
import { Injectable } from '@angular/core';
import { NodeItem } from '@types';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragDataService {

  private _dragData$: BehaviorSubject<NodeItem> = new BehaviorSubject<NodeItem>(null);

  clearDragData(): void {
    this._dragData$.next(null);
  }

  setDragData(dragData: NodeItem): void {
    this._dragData$.next(dragData);
  }

  getDragData$(): Observable<any> {
    return this._dragData$.asObservable();
  }

  constructor() { }
}
