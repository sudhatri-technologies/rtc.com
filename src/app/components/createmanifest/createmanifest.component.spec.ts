import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemanifestComponent } from './createmanifest.component';

describe('CreatemanifestComponent', () => {
  let component: CreatemanifestComponent;
  let fixture: ComponentFixture<CreatemanifestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatemanifestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemanifestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
