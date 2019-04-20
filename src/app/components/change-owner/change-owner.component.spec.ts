import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeOwnerComponent } from './change-owner.component';
import { HttpClientModule } from '@angular/common/http';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { FormsModule } from '@angular/forms';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
