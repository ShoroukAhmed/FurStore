import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorProductDetailsComponent } from './indoor-product-details.component';

describe('IndoorProductDetailsComponent', () => {
  let component: IndoorProductDetailsComponent;
  let fixture: ComponentFixture<IndoorProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndoorProductDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndoorProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
