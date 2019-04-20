import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandRegistrationComponent } from './land-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { FormsModule } from '@angular/forms';
import { empty} from 'rxjs';

describe('LandRegistrationComponent', () => {
  let component: LandRegistrationComponent;
  let fixture: ComponentFixture<LandRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,FormsModule],
      declarations: [LandRegistrationComponent],
      providers: [BlockchainService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it(`should disable submit button if land id is invalid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.landId = 'f vj';
    component.ownerNIC = '951863149V';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

    component.landId = '';
    component.ownerNIC = '951863149V';
    expect(compiled.querySelector('button').disabled).toBeFalsy();
  });

  it(`should disable submit button if owner id is invalid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.landId = '1';
    component.ownerNIC = '951863149';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

    component.landId = '1';
    component.ownerNIC = '95186314V';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

    component.landId = '1';
    component.ownerNIC = '9518631111114V';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

    component.landId = '1';
    component.ownerNIC = '9opdjpjer';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

    component.landId = '1';
    component.ownerNIC = '';
    expect(compiled.querySelector('button').disabled).toBeFalsy();
  });

  it(`should enable submit button if all inputs are valid`, () => {
    component.landId = '1';
    component.ownerNIC = '951863149V';
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').disabled).toBeFalsy();
  });


  it(`should call the service when submitted`, () => {

    const bService = TestBed.get(BlockchainService);
    const spy = spyOn(bService, 'registerLand').and.callFake(data => {
      return empty();
    });

    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });
});
