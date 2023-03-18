import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
// import { CdkTreeModule } from '@angular/cdk/tree';

@NgModule({
  declarations: [],
  exports: [
    NzButtonModule, NzCheckboxModule, NzIconModule,
    NzGridModule, NzSpinModule, NzSkeletonModule,
    // CdkTreeModule
  ]
})
export class ZorroModule { }
