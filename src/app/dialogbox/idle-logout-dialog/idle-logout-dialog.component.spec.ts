import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdleLogoutDialogComponent } from './idle-logout-dialog.component';

describe('IdleLogoutDialogComponent', () => {
  let component: IdleLogoutDialogComponent;
  let fixture: ComponentFixture<IdleLogoutDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdleLogoutDialogComponent]
    });
    fixture = TestBed.createComponent(IdleLogoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
