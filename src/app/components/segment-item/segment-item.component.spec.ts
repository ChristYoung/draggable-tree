import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentItemComponent } from './segment-item.component';

describe('SegmentItemComponent', () => {
  let component: SegmentItemComponent;
  let fixture: ComponentFixture<SegmentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegmentItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
