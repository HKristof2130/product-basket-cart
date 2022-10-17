export class ProductType {
    private _productId : number = -1;
    private _productName : string = "";
    private _productPrice : number = -1;
    private _productCategory : ProductCategory = ProductCategory.UNKNOWN;

    constructor( id : number , name : string, price : number, category:ProductCategory){
        this._productId = id;
        this._productName = name;
        this._productPrice = price
        this._productCategory = category;
    }

    get productId() : number{
        return this._productId;
    }

    get productName() : string{
        return this._productName;
    }

    get productPrice() : number{
        return this._productPrice;
    }

    get productCategory() : ProductCategory{
        return this._productCategory;
    }
}

export enum ProductCategory{
    BUCKET = "Bucket",
    SHOVEL = "Shovel",
    SPADE = "Spade",
    BRUSH = "Brush",
    HAMMER = "Hammer",
    UNKNOWN = "Unknown",
}