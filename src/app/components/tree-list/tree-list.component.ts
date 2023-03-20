import { Component, Input, OnInit } from '@angular/core';
import { NodeItem } from 'src/app/types';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.less']
})
export class TreeListComponent implements OnInit {

  @Input() nodes: NodeItem[] = [];

  constructor(
  ) { }

  ngOnInit(): void {
  }


}
