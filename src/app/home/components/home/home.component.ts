import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { OffersComponent } from '../offers/offers.component';
import { OurServicesComponent } from '../../../shared/components/our-services/our-services.component';
import { LatestNewsComponent } from '../latest-news/latest-news.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent, OffersComponent, OurServicesComponent, LatestNewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
