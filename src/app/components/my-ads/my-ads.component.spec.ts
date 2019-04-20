import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdsComponent } from './my-ads.component';
import { HttpClientModule } from '@angular/common/http';
import { AdService } from 'src/app/services/ad.service';

import { of } from 'rxjs';

describe('MyAdsComponent', () => {
  let component: MyAdsComponent;
  let fixture: ComponentFixture<MyAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [MyAdsComponent],
      providers: [AdService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it(`should load ads from server when initialized`, () => {

    const adService = TestBed.get(AdService);
    spyOn(adService, 'getMyAds').and.callFake(data => {
      return of(['1', '2', '3']);
    });
    
    component.ngOnInit();
    expect(component.ads.length).toBe(3);
  });
});
