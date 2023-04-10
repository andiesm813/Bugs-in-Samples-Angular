import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxCardModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxBadgeModule } from '@infragistics/igniteui-angular';
import { CardsOpacityComponent } from './cards-opacity.component';

describe('CardsOpacityComponent', () => {
  let component: CardsOpacityComponent;
  let fixture: ComponentFixture<CardsOpacityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsOpacityComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxBadgeModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsOpacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
