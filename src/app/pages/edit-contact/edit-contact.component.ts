import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact'
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service'
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  isLoading: boolean = false
  contact: Contact
  
  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      if (!Object.keys(data).length) {
        this.contact = this.contactService.getEmptyContact()
      } else {
      this.contact = data.contact 
    } 
})
  }
  onSaveContact() {
    this.contactService.saveContact(this.contact)
    this.isLoading=true
    setTimeout(() => {
      this.router.navigateByUrl('/contact')
    },1000)
  }
}
