import { Component, OnChanges, OnInit } from '@angular/core';
import { User } from '../../models/user'
import { Contact } from '../../models/contact'
import { Subscription } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {



  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService,private userService: UserService) { }
  oldAmount: number
  user: User
  contact: Contact
  subscription: Subscription
  msg: boolean = false
  isLoading: boolean = false

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data.contact
      this.oldAmount = this.user.coins

      
    })
  }

  tansferCoins() {
    const amount = this.user.coins
    var newAmount = this.oldAmount-amount
    if (newAmount<0) {
      this.msg = true
      return
    } 
    this.user.coins = newAmount
const move: object = this.contactService.getUserMove(this.contact, amount)
this.user.moves.push(move)
this.userService.saveToStorage(this.user)
this.isLoading=true
setTimeout(() => {
  this.router.navigateByUrl('/')
},1000)
  }
}
