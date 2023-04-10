import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule } from '@infragistics/igniteui-angular';
import { NavigationBarComponent } from './navigation-bar.component';

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationBarComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
