// 自定义拖拽时传递数据的服务
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DragDataService {

  private _dragData$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  clearDragData(): void {
    this._dragData$.next(null);
  }

  setDragData(dragData: any): void {
    this._dragData$.next(dragData);
  }

  getDragData$(): Observable<any> {
    return this._dragData$.asObservable();
  }

  constructor() { }
}
