import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { DataService } from '../../services/data.service';


interface Product{
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
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {
  itemsId? : string | null;
  product: Product| undefined;


  // show : boolean = true;
  constructor(private route:ActivatedRoute, private dataService: DataService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.itemsId = params.get('id');

      if (this.itemsId){
        this.product = this.dataService.searchData(this.itemsId)
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



