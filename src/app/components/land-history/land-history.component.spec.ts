import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandHistoryComponent } from './land-history.component';
import { HttpClientModule } from '@angular/common/http';
import { NgFlashMessageService, NgFlashMessagesModule } from 'ng-flash-messages';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { FormsModule } from '@angular/forms';
import { empty } from 'rxjs';

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

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


  it(`should call the service when submitted`, () => {

    const bService = TestBed.get(BlockchainService);
    const spy = spyOn(bService, 'getLandHistory').and.callFake(data => {
      return empty();
    });

    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });
});
