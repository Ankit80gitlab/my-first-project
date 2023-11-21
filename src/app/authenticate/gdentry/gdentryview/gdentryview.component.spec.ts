import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdentryviewComponent } from './gdentryview.component';

describe('GdentryviewComponent', () => {
  let component: GdentryviewComponent;
  let fixture: ComponentFixture<GdentryviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GdentryviewComponent]
    });
    fixture = TestBed.createComponent(GdentryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
