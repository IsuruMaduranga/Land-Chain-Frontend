import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { HttpClientModule } from '@angular/common/http';

import { of } from 'rxjs';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ UsersComponent ],
      providers: [BlockchainService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it(`should load lands from server when initialized`, () => {

    const bService = TestBed.get(BlockchainService);
    spyOn(bService, 'getUsers').and.callFake(data => {
      return of(['1', '2', '3']);
    });
    
    component.ngOnInit();
    expect(component.users.length).toBe(3);
  });
});
