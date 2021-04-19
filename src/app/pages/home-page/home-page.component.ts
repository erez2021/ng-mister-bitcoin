import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { BitcoinService } from '../../services/bitcoin.service';
import {User} from '../../models/user'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  type = 'line';
  data = {
    labels: [],
    datasets: [
      {
        label: "Bitcoin Market Price",
        data: []
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false
  };


  public user: User
  public rate
 
 

  constructor(private userService: UserService,private bitcoinService: BitcoinService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser()
    this.rate = this.bitcoinService.getRate();
  this.getMarketPrice()
  }


  getMarketPrice() {
    var marketPrice = this.bitcoinService.getMarketPrice() 
    const chartXvalues = marketPrice.values.map(value => value.x)
    const chartYValues = marketPrice.values.map(value => value.y)
    console.log(chartYValues, chartXvalues);
    this.data.labels = chartXvalues
    this.data.datasets[0].data = chartYValues 
  }

}
