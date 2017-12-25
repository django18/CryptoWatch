import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CoinDetailPage } from '../pages/coin-detail/coin-detail';
import { CoinsApiProvider } from '../providers/coins-api';
import { HttpClientModule } from '@angular/common/http';
import { CoinDetailService } from '../providers/coin-detail';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CoinDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CoinDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CoinsApiProvider,
    CoinDetailService
  ]
})
export class AppModule {}
