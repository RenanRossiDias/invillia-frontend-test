import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaloaderComponent } from './swaloader.component';

describe('SwaloaderComponent', () => {
  let component: SwaloaderComponent;
  let fixture: ComponentFixture<SwaloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
