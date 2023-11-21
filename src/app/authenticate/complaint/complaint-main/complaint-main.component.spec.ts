import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintMainComponent } from './complaint-main.component';

describe('ComplaintMainComponent', () => {
  let component: ComplaintMainComponent;
  let fixture: ComponentFixture<ComplaintMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplaintMainComponent]
    });
    fixture = TestBed.createComponent(ComplaintMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
