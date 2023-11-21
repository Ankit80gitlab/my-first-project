import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdMainComponent } from './gd-main.component';

describe('GdMainComponent', () => {
  let component: GdMainComponent;
  let fixture: ComponentFixture<GdMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GdMainComponent]
    });
    fixture = TestBed.createComponent(GdMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
