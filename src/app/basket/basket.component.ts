import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ProductCategory } from '../product-type/produt.types';
import { ProductInBasket } from '../product-in-basket.type.ts/product-in-basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {

  @Input() productsInBasket : ProductInBasket[] = [];
  @Output() addSpecificItem = new EventEmitter<string>;
  @Output() subtractSpecificItem = new EventEmitter<string>;
  constructor() { }

  addItem( name: string) {
    console.log("add 1 for"+ name);
    
    this.addSpecificItem.emit(name)
  }

  subtractItem(name : string){
    console.log("sub 1 for"+ name);
    this.subtractSpecificItem.emit(name);
  }

}
