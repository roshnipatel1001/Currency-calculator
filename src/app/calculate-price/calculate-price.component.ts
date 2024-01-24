import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-calculate-price',
  templateUrl: './calculate-price.component.html',
  styleUrls: ['./calculate-price.component.css'],
})
export class CalculatePriceComponent implements OnInit {
  currencyList: string[] = ['USD', 'RUB', 'EUR', 'GBP', 'JPY'];
  currencyRates: any = {};
  displayedColumns: string[] = ['title', 'price'];
  dataSource: any;
  totalCalculation: number = 0;
  currencyTotal: any = [];
  selectedProducts: any = [];
  constructor(public service: AppService, private router: Router) {}
  ngOnInit(): void {
    this.service.products.subscribe((res: any) => {
      if (res.length > 0) {
        this.dataSource = res;
        this.initCurrency();
      } else {
        this.router.navigate(['/product-list']);
      }
    });
  }
  initCurrency() {
    this.service.getCurrency().subscribe((response: any) => {
      this.currencyRates = response.rates;
      this.dataSource.map((product: any) => {
        this.totalCalculation += product.price;
      });
      this.calculateCurrency();
    });
  }
  calculateCurrency() {
    this.currencyList.map((currency: any) => {
      if (this.currencyRates[currency]) {
        let obj = {
          key: this.currencyRates[currency],
          value: (this.currencyRates[currency] * this.totalCalculation).toFixed(
            3
          ),
          name: currency,
        };
        this.currencyTotal.push(obj);
      }
    });
  }
}
