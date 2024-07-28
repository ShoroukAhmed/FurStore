import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorProductsComponent } from './indoor-products.component';

describe('IndoorProductsComponent', () => {
  let component: IndoorProductsComponent;
  let fixture: ComponentFixture<IndoorProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndoorProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndoorProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
