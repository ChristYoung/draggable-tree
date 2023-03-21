import { Component, Input, OnInit } from '@angular/core';
import { GroupItem, NodeItem } from 'src/app/types';

@Component({
  selector: 'app-segment-list',
  templateUrl: './segment-list.component.html',
  styleUrls: ['./segment-list.component.less']
})
export class SegmentListComponent implements OnInit {

  @Input() segmentGroups: GroupItem[] = [];

  ngOnInit(): void { }

  // add a new segment in a specific group
  dropped(n: NodeItem, group: GroupItem): void {
    group.groupIds.push(n.id);
    group.segments.push(n);
  }

}
