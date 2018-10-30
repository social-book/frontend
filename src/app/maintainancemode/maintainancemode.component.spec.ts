import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainancemodeComponent } from './maintainancemode.component';

describe('MaintainancemodeComponent', () => {
  let component: MaintainancemodeComponent;
  let fixture: ComponentFixture<MaintainancemodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainancemodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainancemodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
