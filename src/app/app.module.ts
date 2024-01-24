import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { MatListModule } from '@angular/material/list';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatButtonModule } from '@angular/material/button';
import { CalculatePriceComponent } from './calculate-price/calculate-price.component';

@NgModule({
  declarations: [AppComponent, CalculatePriceComponent, ProductListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    MatListModule,
    NgxSpinnerModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/product-list', pathMatch: 'full' },
      {
        path: 'product-list',
        component: ProductListComponent,
      },
      {
        path: 'product-list/:id',
        component: ProductListComponent,
      },
      {
        path: 'total-price',
        component: CalculatePriceComponent,
      },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
