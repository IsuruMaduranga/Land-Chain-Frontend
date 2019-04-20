import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdComponent } from './create-ad.component';
import { HttpClientModule } from '@angular/common/http';
import { AdService } from 'src/app/services/ad.service';
import { FormsModule } from '@angular/forms';

import {empty } from 'rxjs';

describe('CreateAdComponent', () => {
  let component: CreateAdComponent;
  let fixture: ComponentFixture<CreateAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,FormsModule],
      declarations: [ CreateAdComponent ],
      providers: [AdService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it(`should disable submit button if land id is invalid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.landId = 'fjbkp';
    component.price = '1234';
    component.size = "100";
    component.phone = '0778260669';
    component.city = "bvbdhbv";
    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });

  it(`should disable submit button if price is invalid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.landId = '1';
    component.price = ';nvlk';
    component.size = "100";
    component.phone = '0778260669';
    component.city = "bvbdhbv";
    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });

  it(`should disable submit button if size is invalid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.landId = '1';
    component.price = '1234';
    component.size = "df vj";
    component.phone = '0778260669';
    component.city = "bvbdhbv";
    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });

  it(`should disable submit button if phone is invalid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.landId = '1';
    component.price = '1234';
    component.size = "100";
    component.phone = '077826kkk';
    component.city = "bvbdhbv";
    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });

  it(`should disable submit button if city is invalid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.landId = '1';
    component.price = '1234';
    component.size = "100";
    component.phone = '0778260669';
    component.city = "112scx";
    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });

  it(`should enable submit button if all inputs are valid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.landId = '1';
    component.price = '1234';
    component.size = "100";
    component.phone = '0778260669';
    component.city = "bvbdhbv";
    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });

  it(`should call the service when submitted`, () => {

    const adService = TestBed.get(AdService);
    const spy = spyOn(adService, 'post').and.callFake(data => {
      return empty();
    });

    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });
});
