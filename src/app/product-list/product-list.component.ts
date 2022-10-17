import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../product-service/product.service';
import { ProductCategory, ProductType } from '../product-type/produt.types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit {


  itemsForBasket: Map<string, number> = new Map<string, number>();
  @Input() currentProductList: ProductType[] = [];
  @Output() sendProductsToBasket = new EventEmitter<Map<string, number>>();


  constructor() { }

  
  ngOnInit(): void {
    this.itemsForBasket.set(ProductCategory.BUCKET, 0);
    this.itemsForBasket.set(ProductCategory.SHOVEL, 0);
    this.itemsForBasket.set(ProductCategory.SPADE, 0);
    this.itemsForBasket.set(ProductCategory.BRUSH, 0);
    this.itemsForBasket.set(ProductCategory.HAMMER, 0);
  }

  putToBasket(type: ProductCategory) {
    let amount: any = this.itemsForBasket.get(type);
    amount++;
    this.itemsForBasket.set(type, amount)

    this.sendProductsToBasket.emit(this.itemsForBasket);
  }
  

}
