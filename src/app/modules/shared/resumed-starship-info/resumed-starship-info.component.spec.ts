import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumedStarshipInfoComponent } from './resumed-starship-info.component';

describe('ResumedStarshipInfoComponent', () => {
  let component: ResumedStarshipInfoComponent;
  let fixture: ComponentFixture<ResumedStarshipInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumedStarshipInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumedStarshipInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
