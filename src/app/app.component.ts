import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { ProductsComponent } from './home-decor/components/products/products.component';
import { OurServicesComponent } from './shared/components/our-services/our-services.component';
import { ItemsComponent } from './home-decor/components/items/items.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProductsComponent, OurServicesComponent, ItemsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FurStore';
}
