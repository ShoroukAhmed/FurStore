import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OutdoorProductsComponent } from '../outdoor-products/outdoor-products.component';
import { OutdoorServiceService } from '../../services/outdoor-service.service';

interface outdoorProducts{
    id: number,
    productName: string,
    price: string,
    afterDiscount: string,
    description: string,
    forntImageUrl: string,
    BackImageUrl: string,
    thirdImageUrl: string,
    fourthImageUrl: string ,
    fifthImageUrl: string
}

@Component({
  selector: 'app-outdoor-product-details',
  standalone: true,
  imports: [CommonModule, OutdoorProductsComponent],
  templateUrl: './outdoor-product-details.component.html',
  styleUrl: './outdoor-product-details.component.css'
})
export class OutdoorProductDetailsComponent implements OnInit{
  outdoorProductsId? : string | null;
  outdoorproduct: outdoorProducts| undefined;

  constructor(private route:ActivatedRoute, private outdoorproductsService: OutdoorServiceService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.outdoorProductsId = params.get('id');

      if (this.outdoorProductsId){
        this.outdoorproduct = this.outdoorproductsService.searchOutDoorProducts(this.outdoorProductsId)
      }

    })
  }


  count = 1;
increment(){
  this.count++;
}
decrement(){
  if(this.count>1){
    this.count--;
  }
}

callFunctionImg(imageUrl: string): void {
  const slideImage = document.querySelector('.slide') as HTMLImageElement;
  if (slideImage) {
    slideImage.src = imageUrl;
  }
}

}
