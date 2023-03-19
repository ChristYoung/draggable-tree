import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { NodeItem } from '@types';
import { DragDataService } from '../services/drag-data.service';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  private _canDraggable!: boolean;

  @Input('appDraggable')
  set canDraggable(val: boolean) {
    this._canDraggable = val;
    this.rd2.setAttribute(this.ele.nativeElement, 'draggable', `${val}`);
  }

  get canDraggable() {
    return this._canDraggable;
  }

  @Input() draggingClass!: string;
  @Input() dragData: NodeItem;
  @Input() dragId: string;

  constructor(
    private ele: ElementRef,
    private rd2: Renderer2,
    private dragDataService: DragDataService,
  ) { }

  @HostListener('dragstart', ['$event'])
  onDragStart(e: Event): void {
    const { ele, rd2, draggingClass, dragDataService, dragData } = this;
    if (e.target === ele.nativeElement) {
      rd2.addClass(ele.nativeElement, draggingClass);
      dragDataService.setDragData(dragData);
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(e: Event): void {
    const { ele, rd2, draggingClass } = this;
    if (e.target === ele.nativeElement) {
      rd2.removeClass(ele.nativeElement, draggingClass);
    }
  }

}
