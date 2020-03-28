import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaskyComponent } from './swasky.component';

describe('SwaskyComponent', () => {
  let component: SwaskyComponent;
  let fixture: ComponentFixture<SwaskyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaskyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaskyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
