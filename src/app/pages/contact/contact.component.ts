import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ContactService}  from 'src/app/services/contact.service'
import {Contact}  from '../../models/contact'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts$: Observable<Contact[]>
  private filterBy= {
    term: ''
  }

  constructor(private contactService: ContactService, private router: Router) { }



  ngOnInit(): void {
  
    this.contactService.loadContacts(this.filterBy)
    this.contacts$ = this.contactService.contacts$
console.log(this.contacts$);
  }

  onSetFilter(filterBy) {
    console.log(filterBy);
    
    this.filterBy = filterBy
    this.contactService.loadContacts(this.filterBy)
    this.contacts$ = this.contactService.contacts$
  }
  addContact(){
    this.router.navigateByUrl('/edit')
  }


}
