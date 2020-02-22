import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCasComponent } from './all-cas.component';

describe('AllCasComponent', () => {
  let component: AllCasComponent;
  let fixture: ComponentFixture<AllCasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
