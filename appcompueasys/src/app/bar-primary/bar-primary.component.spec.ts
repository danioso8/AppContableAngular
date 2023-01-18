import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarPrimaryComponent } from './bar-primary.component';

describe('BarPrimaryComponent', () => {
  let component: BarPrimaryComponent;
  let fixture: ComponentFixture<BarPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarPrimaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
