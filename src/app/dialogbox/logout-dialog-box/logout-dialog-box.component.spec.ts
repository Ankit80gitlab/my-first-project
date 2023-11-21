import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutDialogBoxComponent } from './logout-dialog-box.component';

describe('LogoutDialogBoxComponent', () => {
  let component: LogoutDialogBoxComponent;
  let fixture: ComponentFixture<LogoutDialogBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutDialogBoxComponent]
    });
    fixture = TestBed.createComponent(LogoutDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
