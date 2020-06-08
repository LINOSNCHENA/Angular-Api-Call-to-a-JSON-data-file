import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableviewsComponent } from './availableviews.component';

describe('AvailableviewsComponent', () => {
  let component: AvailableviewsComponent;
  let fixture: ComponentFixture<AvailableviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
