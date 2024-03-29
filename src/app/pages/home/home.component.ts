import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { finalize, take, tap } from 'rxjs';
import { DragDataService } from 'src/app/services/drag-data.service';
import { GroupItem, NodeItem } from 'src/app/types';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  nodes: NodeItem[] = [];
  segmentGroups: GroupItem[] = [];
  loading: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private dragData: DragDataService,
  ) { }

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
    const API_URL = environment.usingMock ? 'api/v1/audiences' : 'assets/mock/mock-data.json';
    this.loading = true;
    this.httpClient.request('get', API_URL).pipe(
      tap((nodes: NodeItem[]) => this.dragData.setAllNodes(nodes)),
      finalize(() => this.loading = false),
      take(1),
    ).subscribe((nodes: NodeItem[]) => this.nodes = nodes as NodeItem[]);
  }

}
