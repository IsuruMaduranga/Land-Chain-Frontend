import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandHistoryComponent } from './land-history.component';
import { HttpClientModule } from '@angular/common/http';
import { NgFlashMessageService, NgFlashMessagesModule } from 'ng-flash-messages';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { FormsModule } from '@angular/forms';

describe('LandHistoryComponent', () => {
  let component: LandHistoryComponent;
  let fixture: ComponentFixture<LandHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,FormsModule,NgFlashMessagesModule.forRoot()],
      declarations: [ LandHistoryComponent ],
      providers: [BlockchainService, NgFlashMessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
