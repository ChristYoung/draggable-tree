import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NodeItem } from '@types';
import { tap, delay, finalize, take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  nodes: NodeItem[] = [];
  loading: boolean = false;

  constructor(private httpClient: HttpClient,) { }

  ngOnInit(): void {
    this.fetchAllNodeItem();
  }

  private fetchAllNodeItem(): void {
    this.loading = true;
    this.httpClient.request('get', 'assets/mock/mock-data.json').pipe(
      tap(res => console.log(res)),
      delay(900),
      finalize(() => this.loading = false),
      take(1),
    ).subscribe(nodes => this.nodes = nodes as NodeItem[]);
  }

}
