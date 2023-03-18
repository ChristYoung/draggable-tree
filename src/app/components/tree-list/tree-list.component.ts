import { Component } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { take } from 'rxjs';


@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.less']
})
export class TreeListComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    this.fetchAllNodes();
  }

  private fetchAllNodes(): void {
    this.httpClient.request('get', 'https://draggable-tree.com/api/getAllNodes').pipe(take(1)).subscribe(res => {
      console.log('res', res);
    });
  }

}
