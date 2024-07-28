import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurServicesComponent } from '../../../shared/components/our-services/our-services.component';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';


declare var viewContent:any;
declare var LessMore :any;

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, OurServicesComponent, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  callFunctionView() {
    viewContent.view();
  }


  callFunctionSee(){
    LessMore.see();
  }
  data: any;

  constructor(private dataService: DataService){}
  ngOnInit(){
    this.data = this.dataService.getData()
  }

  show: boolean= true


  isContentVisible=true;
  toggleContent(){
    this.isContentVisible=!this.isContentVisible;
  }

}
