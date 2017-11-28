import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import ApplicationComponent from './components/application/application.component';
import CarouselComponent from "./components/carousel/carousel.component";
import FooterComponent from "./components/footer/footer.component";
import NavbarComponent from "./components/navbar/navbar.component";
import ProductItemComponent from "./components/product-item/product-item.component";
import SearchComponent from "./components/search/search.component";
import StarsComponent from "./components/stars/stars.component";
import {ProductService} from "./services/product.service";
import HomeComponent from "./components/home/home.component";
import ProductDetailComponent from "./components/product-detail/product-detail.component";
import {FilterPipe} from "./pipes/filter.pipe";

@NgModule({
    imports:      [ BrowserModule, ReactiveFormsModule, FormsModule,
                    RouterModule.forRoot([
                        {path: '',                    component: HomeComponent},
                        {path: 'products/:productId', component: ProductDetailComponent}
    ]) ],
    declarations: [ ApplicationComponent,
                    CarouselComponent,
                    FooterComponent,
                    NavbarComponent,
                    HomeComponent,
                    ProductDetailComponent,
                    ProductItemComponent,
                    SearchComponent,
                    StarsComponent,
                    FilterPipe],
    providers:    [ProductService,
                   {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }