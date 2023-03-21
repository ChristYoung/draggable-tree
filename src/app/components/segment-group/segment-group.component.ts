import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { GroupItem, NodeItem } from 'src/app/types';

@Component({
  selector: 'app-segment-group',
  templateUrl: './segment-group.component.html',
  styleUrls: ['./segment-group.component.less']
})
export class SegmentGroupComponent implements OnInit {

  @Input() groupItem: GroupItem;
  @Output() deleted: EventEmitter<GroupItem> = new EventEmitter<GroupItem>();

  ngOnInit(): void { }

  deleteItem(n: NodeItem): void {
    this.groupItem.segments = this.groupItem.segments.filter(s => s.id !== n.id);
    this.groupItem.groupIds = this.groupItem.groupIds.filter(g => g !== n.id);
    if (this.groupItem.segments.length === 0) {
      this.deleted.emit(this.groupItem);
    }
  }

}
