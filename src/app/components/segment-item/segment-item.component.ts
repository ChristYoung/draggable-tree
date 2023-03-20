import { Component, Input, OnInit } from '@angular/core';
import { NodeItem, ValueItem } from 'src/app/types';

@Component({
  selector: 'app-segment-item',
  templateUrl: './segment-item.component.html',
  styleUrls: ['./segment-item.component.less']
})
export class SegmentItemComponent implements OnInit {

  @Input() segmentItem: NodeItem;
  selectedValues: string;
  filterValueList: ValueItem[] = [];
  searchContent: string;
  selectedCount = 0;

  shrink: boolean = false;

  ngOnInit(): void {
    this.filterValueList = this.pushSegItemImmutable(this.segmentItem.valueList);
  }

  valueSelectedChange(): void {
    const selectedValueList = this.filterValueList.filter(v => v.checked);
    this.selectedValues = selectedValueList.map(v => v.key).join(',');
    this.selectedCount = selectedValueList.length;
  }

  searchValueList(searchContent?: string): void {
    this.filterValueList = searchContent ?
      this.pushSegItemImmutable(this.segmentItem.valueList.filter(v => v.key.includes(searchContent)))
      : this.pushSegItemImmutable(this.segmentItem.valueList);
  }

  clearAll(): void {
    if (this.selectedCount > 0) {
      this.filterValueList.forEach(v => v.checked = false);
      this.selectedValues = null;
      this.selectedCount = 0;
    }
  }

  close(): void {
    // TODO
  }

  private pushSegItemImmutable(sources: ValueItem[]): ValueItem[] {
    const targetsItems = [];
    sources.forEach(s => targetsItems.push({ ...s }));
    return targetsItems;
  }

}
