import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { BitcoinService } from '../../services/bitcoin.service';
import { User } from '../../models/user'

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
        data: [],
        backgroundColor: []
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  type1 = 'line';
  data1 = {
    labels: [],
    datasets: [
      {
        label: "Bitcoin Last Transactions",
        data: [],
        backgroundColor: []

      }
    ]
  };
  options1 = {
    responsive: true,
    maintainAspectRatio: false
  };

 
  public user: User
  public rate



  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    // this.user = this.userService.getUser()
    this.user = JSON.parse(localStorage.getItem('user'))
    this.rate = this.bitcoinService.getRate();
    this.getTransactions()
    this.getMarketPrice()
  }
 

  getMarketPrice() {
    var marketPrice = this.bitcoinService.getMarketPrice()
    const chartXvalues = marketPrice.values.map(value => new Date(value.x).toLocaleTimeString())
    const chartYValues = marketPrice.values.map(value => value.y)
    this.data.labels = chartXvalues
    this.data.datasets[0].data = chartYValues
  }
  getTransactions() {
    var transaction = this.bitcoinService.getConfirmedTransactions()
    const chartXvalues = transaction.values.map(value => new Date(value.x).toLocaleTimeString())
    const chartYValues = transaction.values.map(value => value.y)
    this.data1.labels = chartXvalues
    this.data1.datasets[0].data = chartYValues
  }
}
