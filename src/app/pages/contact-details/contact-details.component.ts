import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {Contact} from '../../models/contact'
import { ContactService} from '../../services/contact.service'

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact
  subscription: Subscription
  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService) { }

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(data => {
      console.log(this.route.data);

      this.contact = data.contact
  
    })
  }
  goBack() {
    this.router.navigateByUrl('/contact')
  }

  removeContact(contactId){
    this.contactService.deleteContact(contactId)
    this.router.navigateByUrl('/contact')
  }
  editContact(contactId) {
    this.router.navigateByUrl('/edit/'+contactId)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
