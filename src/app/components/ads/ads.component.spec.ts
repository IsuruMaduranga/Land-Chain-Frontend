import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsComponent } from './ads.component';
import { HttpClientModule } from '@angular/common/http';
import { AdService } from 'src/app/services/ad.service';
import { of } from 'rxjs';

describe('AdsComponent', () => {
  let component: AdsComponent;
  let fixture: ComponentFixture<AdsComponent>;
  let adService: AdService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [AdsComponent],
      providers: [AdService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it(`should load ads from server when initialized`, () => {

    adService = TestBed.get(AdService);
    spyOn(adService, 'getAllAds').and.callFake(data => {
      return of(['1', '2', '3']);
    });
    
    component.ngOnInit();
    expect(component.ads.length).toBe(3);
  });
});
