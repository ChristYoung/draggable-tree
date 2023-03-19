import { Component, Input } from '@angular/core';
import { NodeItem } from '@types';

@Component({
  selector: 'app-segment-item',
  templateUrl: './segment-item.component.html',
  styleUrls: ['./segment-item.component.less']
})
export class SegmentItemComponent {

  @Input() segmentItem: NodeItem;

}
