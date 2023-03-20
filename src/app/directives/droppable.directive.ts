import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { take } from 'rxjs/operators';
import { DragDataService } from '../services/drag-data.service';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective {

  @Output() dropped: EventEmitter<any> = new EventEmitter<any>();
  @Input() droppedClass: string;
  @Input() dropTags: string[];

  constructor(
    private ele: ElementRef,
    private rd2: Renderer2,
    private dragDataService: DragDataService,
  ) { }

  @HostListener('dragover', ['$event'])
  onDragOver(e: Event): void {
    const { ele, rd2, droppedClass } = this;
    e.preventDefault();
    // e.stopPropagation(); // if uncomment this, the drag pollify will be failure.
    // console.log("DroppableDirective -> dragover -> ele.nativeElement", ele.nativeElement);
    // console.log("DroppableDirective -> dragover -> e.target", e.target);
    rd2.addClass(ele.nativeElement, droppedClass);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(e: Event): void {
    const { ele, rd2, droppedClass } = this;
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target, 'leave');
    // if (this.ele.nativeElement === e.target) {
    //   rd2.removeClass(ele.nativeElement, droppedClass);
    // }
    rd2.removeClass(ele.nativeElement, droppedClass);
  }

  @HostListener('drop', ['$event'])
  onDrop(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    const { ele, dragDataService, dropped, rd2, droppedClass } = this;
    // console.log("DroppableDirective -> onDrop -> ele.nativeElement", ele.nativeElement);
    // console.log("DroppableDirective -> onDrop -> e.target", e.target);
    rd2.removeClass(ele.nativeElement, droppedClass);
    dragDataService.getDragData$().pipe(take(1)).subscribe(dragData => dropped.emit(dragData));
  }

}
