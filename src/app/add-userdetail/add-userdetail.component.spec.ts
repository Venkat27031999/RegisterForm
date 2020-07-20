import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserdetailComponent } from './add-userdetail.component';

describe('AddUserdetailComponent', () => {
  let component: AddUserdetailComponent;
  let fixture: ComponentFixture<AddUserdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
