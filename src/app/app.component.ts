import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { BitcoinService } from './services/bitcoin.service';
import {User} from '../app/models/user'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  type = 'bar';
data = {
  labels: [],
      data: []
};
options = {
  responsive: true,
  maintainAspectRatio: false
};


  public user: User
  public rate
  public marketPrice: []
 

  constructor(private userService: UserService,private bitcoinService: BitcoinService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser()
    this.rate = this.bitcoinService.getRate();
    this.marketPrice = this.bitcoinService.getMarketPrice().values

  
  }

  // getMarketPrice() {
  //   var marketPrice = this.bitcoinService.getMarketPrice() 
  //   const chartXvalues = marketPrice.values.map(value => value.x)
  //   const chartYValues = marketPrice.values.map(value => value.y)
  //   console.log(chartYValues, chartXvalues);
  //   this.data.labels = chartXvalues
  //   this.data.data = chartYValues 
  // }

}
