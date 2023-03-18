import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Nodes } from '@types';
import { tap } from 'rxjs';
import { map } from 'rxjs';
import { delay, take } from 'rxjs';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.less']
})
export class TreeListComponent implements OnInit {

  nodes: Nodes[] = [];

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    this.fetchAllNodes();
  }

  private fetchAllNodes(): void {
    this.httpClient.request('get', 'assets/mock/mock-data.json').pipe(
      tap(res => console.log(res)),
      delay(2000),
      take(1),
    ).subscribe(nodes => this.nodes = nodes as Nodes[]);
  }

}
