import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdentryaddComponent } from './gdentryadd.component';

describe('GdentryaddComponent', () => {
  let component: GdentryaddComponent;
  let fixture: ComponentFixture<GdentryaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GdentryaddComponent]
    });
    fixture = TestBed.createComponent(GdentryaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
