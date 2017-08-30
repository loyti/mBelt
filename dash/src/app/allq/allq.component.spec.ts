import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllqComponent } from './allq.component';

describe('AllqComponent', () => {
  let component: AllqComponent;
  let fixture: ComponentFixture<AllqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
