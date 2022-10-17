import { Component, OnInit } from '@angular/core';
import { ProductInBasket } from './basket/basket-product.type';
import { ProductService } from './product-service/product.service';
import { ProductCategory, ProductType } from './product-types/produt.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService],
})
export class AppComponent implements OnInit {
  productList: ProductType[] = [];
  productsToBasket: ProductInBasket[] = [];
  title = "product-basket-cart";
  produtsFinalPrize : number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProductList();

  }

  fillBasket($event: Map<string, number>) {
    this.productsToBasket = [];
    const values = Object.values(ProductCategory);
    for (let i = 0; i < values.length; i++) {

      const productKey: string = values[i];
      const productAmount: any = $event.get(values[i]);
      console.log(productAmount);

      if ($event.has(productKey) && productAmount > 0) {

        let item = new ProductInBasket(productKey, productAmount);
        console.log(item);

        this.productsToBasket.push(item);
      }
    }

    this.calculateFinalPrize();
  }

  addForSpecificItem($event: string) {
    this.productsToBasket.forEach(product => {

      if (product.name === $event) {
        product.amount++;
        this.calculateFinalPrize();
        return;
      }

    });
  }

  subtractFromSpecificItem($event: string) {
    
    for( let i = 0; i < this.productsToBasket.length; i++){
      let currentProduct = this.productsToBasket[i];
      if(currentProduct.name === $event){

        if(this.productsToBasket[i].amount === 0) {
          this.calculateFinalPrize();
          return;
        }
        else{
          this.productsToBasket[i].amount--;
        }
        this.calculateFinalPrize();
        return;

      }
    }
  }

  calculateFinalPrize() {

    let sum = 0;

    this.productsToBasket.forEach(productToBasket => {
      
      this.productList.forEach( product => {
        
        if( product.productName === productToBasket.name){
          sum += product.productPrice * productToBasket.amount;
        }

      });

    });

    this.produtsFinalPrize =  sum;
  }
}
