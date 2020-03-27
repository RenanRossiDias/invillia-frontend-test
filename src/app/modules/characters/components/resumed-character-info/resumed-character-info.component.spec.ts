import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumedCharacterInfoComponent } from './resumed-character-info.component';

describe('ResumedCharacterInfoComponent', () => {
  let component: ResumedCharacterInfoComponent;
  let fixture: ComponentFixture<ResumedCharacterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumedCharacterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumedCharacterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
