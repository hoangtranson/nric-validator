import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NricValidatorComponent } from './nric-validator.component';

describe('NricValidatorComponent', () => {
  let component: NricValidatorComponent;
  let fixture: ComponentFixture<NricValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NricValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NricValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
