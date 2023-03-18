import { Component, Input } from '@angular/core';
import { Nodes } from '@types';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.less']
})
export class TreeItemComponent {

  @Input() nodeItem!: Nodes;

  nodeItemClick(item: Nodes): void {
    this.changeExpandStatus(item);
  }

  private changeExpandStatus(item: Nodes): void {
    if (item.type === 'DIR') {
      item.expanded = !item.expanded;
      if (item?.children?.length > 0) {
        for (let index = 0; index < item.children.length; index++) {
          const element = item.children[index];
          this.changeExpandStatus(element);
        }
      }
    }
  }
}