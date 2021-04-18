import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ContactService}  from 'src/app/services/contact.service'
import {Contact}  from '../../models/contact'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts$: Observable<Contact[]>
  private filterBy: {}

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.loadContacts(this.filterBy)
    this.contacts$ = this.contactService.contacts$
console.log(this.contacts$);

  }

}
