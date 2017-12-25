import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Currency } from '../models/currency.model';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';


@Injectable()
export class CoinsApiProvider {
  coinsApiUrl:string="https://api.coinmarketcap.com/v1/ticker/?convert=INR&limit=10";

  constructor(public http: HttpClient,
    public loadingCtrl: LoadingController) {
    console.log('Hello CoinsApiProvider Provider');
  }

  // Get coins list and their data
  getCoinsData(): Observable<Currency[]> {
    console.log("Getting Coins Data from Api...");
    let loader = this.loadingCtrl.create({
      content: "Loading...",
      duration:1000
    });
    loader.present();
    return this.http.get(this.coinsApiUrl)
      .map(res => <Currency[]>res);
  }



}
