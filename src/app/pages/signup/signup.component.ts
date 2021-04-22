import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'
import { UserService } from '../../services/user.service'
import {  Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public user: User

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getEmptyUser()
  }

  signup() {
    console.log(this.user);
    this.userService.saveToStorage(this.user)
    this.router.navigateByUrl("/")
  }
}
