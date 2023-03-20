import { Component, Input, OnInit } from '@angular/core';
import { NodeItem } from '@types';

@Component({
  selector: 'app-segment-list',
  templateUrl: './segment-list.component.html',
  styleUrls: ['./segment-list.component.less']
})
export class SegmentListComponent implements OnInit {

  @Input() segmentGroups: NodeItem[][] = [];

  ngOnInit(): void { }

  dropped(item: NodeItem, group: NodeItem[]): void {
    group.push(item);
  }

}
