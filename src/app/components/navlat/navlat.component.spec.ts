import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavlatComponent } from './navlat.component';

describe('NavlatComponent', () => {
  let component: NavlatComponent;
  let fixture: ComponentFixture<NavlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
