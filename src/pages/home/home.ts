import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { CoinDetailPage } from '../coin-detail/coin-detail';
import { Currency } from '../../models/currency.model';
import { CoinsApiProvider } from '../../providers/coins-api';
import { CoinDetailService } from '../../providers/coin-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Coinslist:Currency[]=[];

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              private coinsApiProvider:CoinsApiProvider,
              private coinDetailService:CoinDetailService) {
    coinsApiProvider.getCoinsData()
      .subscribe(coinList => this.Coinslist= coinList);        

      
  }

  onCardClick(currency:Currency){
    // let modal = this.modalCtrl.create(CoinDetailPage);
    // modal.present();
   // console.log("onCardClick::Setting currency :",currency);
    this.coinDetailService.setSelectedCurrency(currency);
    
    this.navCtrl.push(CoinDetailPage);
  }

  onRefresh(){
    this.coinsApiProvider.getCoinsData();
  }



}
