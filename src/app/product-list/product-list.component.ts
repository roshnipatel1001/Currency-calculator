import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService } from 'src/app/services/app.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  title = 'Currency-calculator';
  displayedColumns: string[] = ['select', 'id', 'title', 'price'];
  dataSource: any;
  currencyList: string[] = ['rubles', 'euros', 'US dollars', 'pounds', 'yens'];
  selection = new SelectionModel<Product>(true, []);
  selectedProduct: any = [];
  constructor(
    public service: AppService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}
  ngOnInit() {
    this.initProducts();
  }
  initProducts() {
    this.spinner.show();
    this.service.getProducts().subscribe((res: any) => {
      this.dataSource = res.products;
      this.spinner.hide();
    });
  }

  totalCalculation() {
    this.service.changeDataSubject(this.selectedProduct);
    this.router.navigate(['/total-price']);
  }
  isAllSelected() {
    const selectedItems = this.selection.selected.length;
    const selectedRows = this.dataSource.length;
    this.selectedProduct = [];
    this.selectedProduct = this.selection?.selected
      ? this.selection?.selected
      : [];
    return selectedItems === selectedRows;
  }

  toggleAllRows() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.selection.select(...this.dataSource);
    this.selectedProduct = [];
  }
  routeChange() {
    this.router.navigate(['product-list/4']);
  }
}
