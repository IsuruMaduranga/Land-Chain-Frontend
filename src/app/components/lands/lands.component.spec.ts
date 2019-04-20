import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandsComponent } from './lands.component';
import { HttpClientModule } from '@angular/common/http';
import { BlockchainService } from 'src/app/services/blockchain.service';

describe('LandsComponent', () => {
  let component: LandsComponent;
  let fixture: ComponentFixture<LandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [LandsComponent],
      providers: [BlockchainService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
