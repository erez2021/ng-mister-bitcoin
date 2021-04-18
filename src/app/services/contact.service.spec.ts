import { TestBed } from '@angular/core/testing';

import { Contact.Service } from './contact.service';

describe('Contact.Service', () => {
  let service: Contact.Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Contact.Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
