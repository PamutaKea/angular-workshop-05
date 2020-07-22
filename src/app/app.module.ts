import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { ProductNamePipe } from './product-name.pipe';
import { ProductPipe } from './product.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RatingComponent } from './rating/rating.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    LoginComponent,
    ProductNamePipe,
    ProductPipe,
    RatingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
