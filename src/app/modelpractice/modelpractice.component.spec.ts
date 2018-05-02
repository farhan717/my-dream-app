import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelpracticeComponent } from './modelpractice.component';

describe('ModelpracticeComponent', () => {
  let component: ModelpracticeComponent;
  let fixture: ComponentFixture<ModelpracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelpracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
