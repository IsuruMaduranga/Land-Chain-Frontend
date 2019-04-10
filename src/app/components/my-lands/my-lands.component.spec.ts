import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLandsComponent } from './my-lands.component';

describe('MyLandsComponent', () => {
  let component: MyLandsComponent;
  let fixture: ComponentFixture<MyLandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
