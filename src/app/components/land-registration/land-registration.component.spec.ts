import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandRegistrationComponent } from './land-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { FormsModule } from '@angular/forms';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
