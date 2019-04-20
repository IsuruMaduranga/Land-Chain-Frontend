import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsComponent } from './ads.component';
import { HttpClientModule } from '@angular/common/http';
import { AdService } from 'src/app/services/ad.service';

describe('AdsComponent', () => {
  let component: AdsComponent;
  let fixture: ComponentFixture<AdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ AdsComponent ],
      providers: [AdService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
