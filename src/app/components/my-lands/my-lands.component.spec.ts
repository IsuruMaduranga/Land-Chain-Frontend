import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLandsComponent } from './my-lands.component';
import { HttpClientModule } from '@angular/common/http';
import { BlockchainService } from 'src/app/services/blockchain.service';

describe('MyLandsComponent', () => {
  let component: MyLandsComponent;
  let fixture: ComponentFixture<MyLandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [MyLandsComponent],
      providers: [BlockchainService]
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
