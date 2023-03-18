import { Component, Input } from '@angular/core';
import { Nodes } from '@types';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.less']
})
export class TreeItemComponent {

  @Input() nodeItem!: Nodes;

}
