import { Component, Input } from '@angular/core';
import { NodeItem } from 'src/app/types';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.less'],
})
export class TreeItemComponent {
  @Input({ required: true }) nodeItem!: NodeItem;

  nodeItemClick(item: NodeItem): void {
    item.expanded = !item.expanded;
  }
}
