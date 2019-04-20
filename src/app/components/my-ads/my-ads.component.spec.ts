import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdsComponent } from './my-ads.component';
import { HttpClientModule } from '@angular/common/http';
import { AdService } from 'src/app/services/ad.service';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
