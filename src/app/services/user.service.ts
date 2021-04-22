import { Injectable } from '@angular/core';
import {User} from '../models/user'
import {Contact} from '../models/contact'

@Injectable({
  providedIn: 'root'
})
export class UserService {

 

  constructor() { }

  user: User = {
    name: "Mister Bradly",
    coins: 100,
    moves: []
    }

    getUser() {
      return this.user
    }

   getEmptyUser() {
     const newUser: User = {
       name:'',
       coins: 100,
       moves: []
     }
     return newUser
   }

   saveToStorage(user: User) {
    localStorage.setItem('user', JSON.stringify(user))
   }


}
