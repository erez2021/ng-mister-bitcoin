import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class BitcoinService implements OnInit{

  

  constructor(private http: HttpClient) { }

ngOnInit() {
  
}


 getMarketPrice() {
    var marketPrice = JSON.parse(localStorage.getItem('market-price'))
    if (!marketPrice) {
        return this.http.get(`https://api.blockchain.info/charts/market-price?timespan=3months&format=json&cors=true`)
            .subscribe(res => {
                console.log('Service Got Res:', res);
                marketPrice = res
                localStorage.setItem('market-price', JSON.stringify(marketPrice))

            })
         
    } return marketPrice
}


 getRate() {
    var bitcoinRate = JSON.parse(localStorage.getItem('bitcoin-rate'))
    if (!bitcoinRate) {
        return this.http.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
            .subscribe(res => {
                console.log('Service Got Res:', res);
                bitcoinRate = res
                localStorage.setItem('bitcoin-rate', JSON.stringify(bitcoinRate))

            })
    
    } return bitcoinRate
}



 getConfirmedTransactions() {
    var transaction = JSON.parse(localStorage.getItem('transaction')) 
    if (!transaction) {
        return this.http.get(`https://api.blockchain.info/charts/n-transactions?timespan=3months&format=json&cors=true`)
        .subscribe(res => {
            console.log('Service Got Res:', res);
            transaction = res
      
            localStorage.setItem('transaction', JSON.stringify(transaction))
        })
 
    } return transaction
}
}
