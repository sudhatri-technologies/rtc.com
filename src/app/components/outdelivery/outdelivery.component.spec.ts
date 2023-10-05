import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdeliveryComponent } from './outdelivery.component';

describe('OutdeliveryComponent', () => {
  let component: OutdeliveryComponent;
  let fixture: ComponentFixture<OutdeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutdeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
