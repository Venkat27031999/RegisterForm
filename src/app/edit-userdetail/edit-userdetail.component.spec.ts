import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserdetailComponent } from './edit-userdetail.component';

describe('EditUserdetailComponent', () => {
  let component: EditUserdetailComponent;
  let fixture: ComponentFixture<EditUserdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
