import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLinksComponent } from './text-links.component';

describe('TextLinksComponent', () => {
  let component: TextLinksComponent;
  let fixture: ComponentFixture<TextLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
