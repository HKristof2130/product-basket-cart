import { Injectable } from "@angular/core";
import { ProductCategory, ProductType } from "../product-types/produt.types";


@Injectable()
export class ProductService{
    
    bucket : ProductType = new ProductType(1,"Bucket",1023.5678,ProductCategory.BUCKET);
    shovel : ProductType = new ProductType(2,"Shovel",2399.00,ProductCategory.SHOVEL);
    spade : ProductType = new ProductType(3,"Spade",2500.00,ProductCategory.SPADE);
    brush : ProductType = new ProductType(4,"Brush",1200.00,ProductCategory.BRUSH);
    hammer : ProductType = new ProductType(5,"Hammer",999.00,ProductCategory.HAMMER);
    

    constructor(){
        
    }

    getProductList() : ProductType[]{
        return [this.bucket,this.shovel,this.spade,this.brush,this.hammer];
    }

}

