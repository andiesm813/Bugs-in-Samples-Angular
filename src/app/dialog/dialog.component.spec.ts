import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxDialogModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxDialogModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxBadgeModule, IgxBadgeModule, IgxBadgeModule } from '@infragistics/igniteui-angular';
import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxDialogModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxDialogModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxBadgeModule, IgxBadgeModule, IgxBadgeModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
