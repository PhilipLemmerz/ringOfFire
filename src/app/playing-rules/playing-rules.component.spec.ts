import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingRulesComponent } from './playing-rules.component';

describe('PlayingRulesComponent', () => {
  let component: PlayingRulesComponent;
  let fixture: ComponentFixture<PlayingRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayingRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
