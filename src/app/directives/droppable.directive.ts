import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { take } from 'rxjs/operators';
import { DragDataService } from '../services/drag-data.service';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective {

  private _candroppable: boolean;

  @Output() dropped: EventEmitter<any> = new EventEmitter<any>();
  @Input() droppedClass: string;
  @Input() dropTags: string[] = []; // store nodeItems ids.

  @Input('appDroppable')
  set canDroppable(val: boolean) {
    this._candroppable = val;
  }

  get canDroppable(): boolean {
    return this._candroppable;
  }

  constructor(
    private ele: ElementRef,
    private rd2: Renderer2,
    private dragDataService: DragDataService,
  ) { }

  @HostListener('dragenter', ['$event'])
  onDragEnter(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if (this.canDroppable) {
      this.rd2.addClass(this.ele.nativeElement, this.droppedClass);
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(e: DragEvent): void {
    e.preventDefault();
    // e.stopPropagation(); // if uncomment this, the drag pollify will be failure.
    if (this.ele.nativeElement === e.target) {
      if (this.canDroppable) {
        this.rd2.setProperty(e, 'dataTransfer.effectAllowed', 'all');
        this.rd2.setProperty(e, 'dataTransfer.dropEffect', 'move');
      } else {
        console.log('this.canDroppable', this.canDroppable);
        this.rd2.setProperty(e, 'dataTransfer.effectAllowed', 'none');
        this.rd2.setProperty(e, 'dataTransfer.dropEffect', 'link');
      }
    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(e: Event): void {
    const { ele, rd2, droppedClass } = this;
    e.preventDefault();
    e.stopPropagation();
    if (this.ele.nativeElement === e.target) {
      rd2.removeClass(ele.nativeElement, droppedClass);
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    const { ele, dragDataService, dropped, rd2, droppedClass } = this;
    // console.log("DroppableDirective -> onDrop -> ele.nativeElement", ele.nativeElement);
    // console.log("DroppableDirective -> onDrop -> e.target", e.target);
    rd2.removeClass(ele.nativeElement, droppedClass);
    if (this.canDroppable) {
      dropped.emit(dragDataService.getDragData());
      dragDataService.clearDragData();
    }
  }

}
