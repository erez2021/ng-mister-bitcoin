import { Component, OnInit, Input } from '@angular/core';
import { User} from '../../models/user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User
  @Input() rate: number

  constructor() { }

  ngOnInit(): void {
  }

  get bitcoinRate() {
  return (1/this.rate).toFixed(2)
}
}
