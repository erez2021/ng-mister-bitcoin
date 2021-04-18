import { Injectable } from '@angular/core';
import {User} from '../models/user'

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

   
}
