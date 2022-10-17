export class ProductInBasket {
    
    private _name : string = "";
    amount: number = 0;

    constructor( name : string, amount : number){
        this._name = name;
        this.amount = amount;
    }

    get name() : string{
        return this._name;
    }
}