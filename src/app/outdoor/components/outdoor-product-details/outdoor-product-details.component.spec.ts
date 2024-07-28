import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorProductDetailsComponent } from './outdoor-product-details.component';

describe('OutdoorProductDetailsComponent', () => {
  let component: OutdoorProductDetailsComponent;
  let fixture: ComponentFixture<OutdoorProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutdoorProductDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutdoorProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
