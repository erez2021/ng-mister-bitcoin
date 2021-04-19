import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactResolverService {

  constructor(private contactService: ContactService) { }

  resolve(route: ActivatedRouteSnapshot){
    const {id} = route.params
    console.log('id:', id);
    
    return this.contactService.getContactById(id)
  }
}
