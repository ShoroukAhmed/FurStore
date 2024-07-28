import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorProductsComponent } from './outdoor-products.component';

describe('OutdoorProductsComponent', () => {
  let component: OutdoorProductsComponent;
  let fixture: ComponentFixture<OutdoorProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutdoorProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutdoorProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
