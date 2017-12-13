import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTitleCaseComponent } from './input-title-case.component';

describe('InputTitleCaseComponent', () => {
  let component: InputTitleCaseComponent;
  let fixture: ComponentFixture<InputTitleCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTitleCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTitleCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
