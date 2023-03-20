import { Component, Input, OnInit } from '@angular/core';
import { NodeItem } from 'src/app/types';

@Component({
  selector: 'app-segment-group',
  templateUrl: './segment-group.component.html',
  styleUrls: ['./segment-group.component.less']
})
export class SegmentGroupComponent implements OnInit {

  @Input() segments: NodeItem[] = [];

  ngOnInit(): void {

  }

}
