import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxDropDownModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxBadgeModule } from '@infragistics/igniteui-angular';
import { SpaceBetweenComponent } from './space-between.component';

describe('SpaceBetweenComponent', () => {
  let component: SpaceBetweenComponent;
  let fixture: ComponentFixture<SpaceBetweenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceBetweenComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxDropDownModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxBadgeModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceBetweenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
