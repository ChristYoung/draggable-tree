import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Nodes } from '@types';
import { delay, finalize, take, tap } from 'rxjs';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.less']
})
export class TreeListComponent implements OnInit {

  nodes: Nodes[] = [];
  loading: boolean = false;

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    this.fetchAllNodes();
  }

  private fetchAllNodes(): void {
    this.loading = true;
    this.httpClient.request('get', 'assets/mock/mock-data.json').pipe(
      tap(res => console.log(res)),
      delay(900),
      finalize(() => this.loading = false),
      take(1),
    ).subscribe(nodes => this.nodes = nodes as Nodes[]);
  }

}
