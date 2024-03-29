import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgcFormsModule, IgcFormsModule, IgcFormsModule, IgcFormsModule, IgcFormsModule, IgcFormsModule, IgcFormsModule, IgcFormsModule, IgcFormsModule, IgcFormsModule, IgcFormsModule, IgcFormsModule } from '@infragistics/igniteui-angular';
import { RatingComponent } from './rating.component';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgcFormsModule, IgcFormsModule, IgcFormsModule, IgcFormsModule, IgcFormsModule, IgcFormsModule, IgcFormsModule, IgcFormsModule, IgcFormsModule, IgcFormsModule, IgcFormsModule, IgcFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
