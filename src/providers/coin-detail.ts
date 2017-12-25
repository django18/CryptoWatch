import {  Injectable } from "@angular/core";
import { Currency } from "../models/currency.model";

@Injectable()
export class CoinDetailService{
    selectedCurrency:Currency;
    
    constructor(){
    }    

    setSelectedCurrency(currency:Currency){
        this.selectedCurrency=currency;
    }

    getSelectedCurrency(){
        return this.selectedCurrency;
    }


}