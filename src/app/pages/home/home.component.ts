import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GroupItem, NodeItem } from 'src/app/types';
import { getPathByNodeId } from '@utils';
import { tap, delay, finalize, take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  nodes: NodeItem[] = [];
  segmentGroups: GroupItem[] = [];
  loading: boolean = false;

  constructor(private httpClient: HttpClient,) { }

  ngOnInit(): void {
    this.fetchAllNodeItem();
  }

  // create a new group
  droped(n: NodeItem): void {
    this.segmentGroups.push({
      groupIds: [n.id],
      segments: [n]
    });
  }

  private fetchAllNodeItem(): void {
    this.loading = true;
    this.httpClient.request('get', 'assets/mock/mock-data.json').pipe(
      tap(res => sessionStorage.setItem('allNodes', JSON.stringify(res))),
      delay(900),
      finalize(() => this.loading = false),
      take(1),
    ).subscribe(nodes => this.nodes = nodes as NodeItem[]);
  }

}
