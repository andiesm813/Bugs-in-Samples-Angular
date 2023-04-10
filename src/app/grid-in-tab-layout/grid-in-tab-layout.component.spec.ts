import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxGridModule, IgxTabsModule, IgxIconModule, IgxGridModule, IgxIconModule } from '@infragistics/igniteui-angular';
import { GridInTabLayoutComponent } from './grid-in-tab-layout.component';

describe('GridInTabLayoutComponent', () => {
  let component: GridInTabLayoutComponent;
  let fixture: ComponentFixture<GridInTabLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridInTabLayoutComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxGridModule, IgxTabsModule, IgxIconModule, IgxGridModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridInTabLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
