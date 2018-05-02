import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipepracticeComponent } from './pipepractice.component';

describe('PipepracticeComponent', () => {
  let component: PipepracticeComponent;
  let fixture: ComponentFixture<PipepracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipepracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipepracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
