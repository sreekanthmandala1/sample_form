import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Below18ValidatorComponent } from './below18-validator.component';

describe('Below18ValidatorComponent', () => {
  let component: Below18ValidatorComponent;
  let fixture: ComponentFixture<Below18ValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Below18ValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Below18ValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
