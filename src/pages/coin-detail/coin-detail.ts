import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Currency } from '../../models/currency.model';
import { CoinDetailService } from '../../providers/coin-detail';

/**
 * Generated class for the CoinDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-coin-detail',
  templateUrl: 'coin-detail.html',
})
export class CoinDetailPage {
  
  currency:Currency;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private coinDetailService:CoinDetailService) {
                console.log("Constructor CoinDetailPage");
                this.currency=this.coinDetailService.getSelectedCurrency();
    console.log("Selected Curr:",this.currency);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoinDetailPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter CoinDetailPage');
  }

   ionViewWillEnter(){
    console.log('ionViewWillEnter CoinDetailPage');
    
   }

}
