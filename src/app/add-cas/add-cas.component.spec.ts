import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCasComponent } from './add-cas.component';

describe('AddCasComponent', () => {
  let component: AddCasComponent;
  let fixture: ComponentFixture<AddCasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
