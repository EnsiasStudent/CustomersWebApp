import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexTextboxComponent } from './flex-textbox.component';

describe('FlexTextboxComponent', () => {
  let component: FlexTextboxComponent;
  let fixture: ComponentFixture<FlexTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
