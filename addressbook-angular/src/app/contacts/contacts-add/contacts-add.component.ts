import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.scss']
})
export class ContactsAddComponent implements OnInit {

  contact = {
    prenom: 'Romain',
    nom: 'Bohdanowicz',
  };

  constructor(
    private contactService: ContactService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  handleSubmit(event: Event) {
    // event.preventDefault();
    const body = {
      name: this.contact.prenom + ' ' + this.contact.nom,
    };
    this.contactService.create(body)
      .subscribe((contact) => {
        this.contactService.newContacts.emit(contact);
        this.router.navigate(['contacts']);
      });
  }
}
