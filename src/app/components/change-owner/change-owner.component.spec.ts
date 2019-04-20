import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeOwnerComponent } from './change-owner.component';
import { HttpClientModule } from '@angular/common/http';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { FormsModule } from '@angular/forms';

import { empty } from 'rxjs';

describe('ChangeOwnerComponent', () => {
  let component: ChangeOwnerComponent;
  let fixture: ComponentFixture<ChangeOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,FormsModule],
      declarations: [ ChangeOwnerComponent ],
      providers: [ BlockchainService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it(`should disable submit button if land id is invalid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.landId = 'bhjrb';
    component.newOwnerId = '951863149V';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

    component.landId = '';
    component.newOwnerId = '951863149V';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });

  it(`should disable submit button if new owner id is invalid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.landId = '1';
    component.newOwnerId = '951863149';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

    component.landId = '1';
    component.newOwnerId = '9518631V';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

    component.landId = '1';
    component.newOwnerId = '9518631499V';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

    component.landId = '1';
    component.newOwnerId = '';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });

  it(`should enable submit button if all inputs are valid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.landId = '1';
    component.newOwnerId = '951863149V';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });

  it(`should call the service when submitted`, () => {
   
    const bService = TestBed.get(BlockchainService);
    const spy = spyOn(bService, 'changeOwner').and.callFake(data => {
      return empty();
    });

    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });
});
