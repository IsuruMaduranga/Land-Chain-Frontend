import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLandsComponent } from './my-lands.component';
import { HttpClientModule } from '@angular/common/http';
import { BlockchainService } from 'src/app/services/blockchain.service';

import { of } from 'rxjs';

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

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it(`should load lands from server when initialized`, () => {

    const bService = TestBed.get(BlockchainService);
    spyOn(bService, 'getLandsOfUser').and.callFake(data => {
      return of(['1', '2', '3']);
    });
    
    component.ngOnInit();
    expect(component.lands.length).toBe(3);
  });
});
