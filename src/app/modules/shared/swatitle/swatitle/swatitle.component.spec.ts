import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwatitleComponent } from './swatitle.component';

describe('SwatitleComponent', () => {
  let component: SwatitleComponent;
  let fixture: ComponentFixture<SwatitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwatitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwatitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
