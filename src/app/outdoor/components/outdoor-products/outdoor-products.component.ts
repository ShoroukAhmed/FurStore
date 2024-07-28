import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OurServicesComponent } from '../../../shared/components/our-services/our-services.component';
import { OutdoorServiceService } from '../../services/outdoor-service.service';


declare var LessMore :any;

@Component({
  selector: 'app-outdoor-products',
  standalone: true,
  imports: [RouterLink, CommonModule, OurServicesComponent],
  templateUrl: './outdoor-products.component.html',
  styleUrl: './outdoor-products.component.css'
})
export class OutdoorProductsComponent implements OnInit{

  callFunctionSee(){
    LessMore.see();
  }
  show: boolean= true

  outdoorproducts:any;

  constructor(private outdoorproductsService: OutdoorServiceService){}
  ngOnInit(){
    this.outdoorproducts = this.outdoorproductsService.getOutDoorProducts()
  }

  isContentVisible=true;
  toggleContent(){
    this.isContentVisible=!this.isContentVisible;
  }
}
