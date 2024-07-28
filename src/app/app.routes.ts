import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeDecorModule } from './home-decor/home-decor.module';
import { ProductsComponent } from './home-decor/components/products/products.component';
import { ItemsComponent } from './home-decor/components/items/items.component';
import { IndoorProductsComponent } from './indoor/components/indoor-products/indoor-products.component';
import { OutdoorProductsComponent } from './outdoor/components/outdoor-products/outdoor-products.component';
import { HomeComponent } from './home/components/home/home.component';
import { SignupComponent } from './signup/signup.component';
import { OutdoorProductDetailsComponent } from './outdoor/components/outdoor-product-details/outdoor-product-details.component';
import { AddcartComponent } from './addcart/addcart.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'home-decor', component: ProductsComponent},
  {path: 'indoor', component: IndoorProductsComponent},
  {path: 'outdoor', component: OutdoorProductsComponent},
  {path:'product/:id', component:ItemsComponent},
  {path: 'signup', component: SignupComponent},
  {path:'outdoorproduct/:id', component:OutdoorProductDetailsComponent},
  {path: 'addcart', component: AddcartComponent}

];
