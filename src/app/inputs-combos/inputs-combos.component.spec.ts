import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { InputsCombosComponent } from './inputs-combos.component';

describe('InputsCombosComponent', () => {
  let component: InputsCombosComponent;
  let fixture: ComponentFixture<InputsCombosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsCombosComponent ],
      imports: [ NoopAnimationsModule, FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsCombosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
