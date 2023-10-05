import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchcargoComponent } from './dispatchcargo.component';

describe('DispatchcargoComponent', () => {
  let component: DispatchcargoComponent;
  let fixture: ComponentFixture<DispatchcargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispatchcargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchcargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
