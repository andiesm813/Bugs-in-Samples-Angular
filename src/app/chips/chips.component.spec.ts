import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxChipsModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxIconModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxChipsModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxIconModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule } from '@infragistics/igniteui-angular';
import { ChipsComponent } from './chips.component';

describe('ChipsComponent', () => {
  let component: ChipsComponent;
  let fixture: ComponentFixture<ChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxChipsModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxIconModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxChipsModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxIconModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
