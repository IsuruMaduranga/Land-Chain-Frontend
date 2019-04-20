import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdComponent } from './create-ad.component';
import { HttpClientModule } from '@angular/common/http';
import { AdService } from 'src/app/services/ad.service';
import { FormsModule } from '@angular/forms';

describe('CreateAdComponent', () => {
  let component: CreateAdComponent;
  let fixture: ComponentFixture<CreateAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,FormsModule],
      declarations: [ CreateAdComponent ],
      providers: [AdService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
