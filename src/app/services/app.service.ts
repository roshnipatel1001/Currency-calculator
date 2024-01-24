import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  selectedProduct: any = [];
  private productUrl =
    'https://dummyjson.com/products?limit=10&&select=title,price';
  private currencyUrl = 'https://api.exchangerate-api.com/v4/latest/USD';
  selectedProducts = new BehaviorSubject([]);
  products = this.selectedProducts.asObservable();

  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.getHttpMethod(this.productUrl);
  }
  getCurrency() {
    return this.getHttpMethod(this.currencyUrl);
  }
  changeDataSubject(data: any) {
    this.selectedProducts.next(data);
  }
  getHttpMethod(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
}
