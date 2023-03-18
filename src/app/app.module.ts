import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeListComponent } from './components/tree-list/tree-list.component';
import { DraggableDirective } from './directives/draggable.directive';
import { HomeComponent } from './pages/home/home.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZorroModule } from './zorro/zorro.module';
import { TreeItemComponent } from './components/tree-item/tree-item.component';
import { NzIconService } from 'ng-zorro-antd/icon';
import { svgCreator } from '@utils';
import { SegmentListComponent } from './components/segment-list/segment-list.component';
import { SegmentGroupComponent } from './components/segment-group/segment-group.component';
import { SegmentItemComponent } from './components/segment-item/segment-item.component';
// import 'draggable-polyfill';
// import '../';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    TreeListComponent,
    HomeComponent,
    DraggableDirective,
    TreeItemComponent,
    SegmentListComponent,
    SegmentGroupComponent,
    SegmentItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ZorroModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private nzIconService: NzIconService,
  ) {
    svgCreator(this.nzIconService);
  }
}
