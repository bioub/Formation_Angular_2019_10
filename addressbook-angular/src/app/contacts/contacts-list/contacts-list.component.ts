import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from "@angular/common/http";
import { Contact } from '../model';
import { Observable } from 'rxjs';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  // contacts$: Observable<Contact[]>;

  // constructor(
  //   private title: Title,
  //   private httpClient: HttpClient
  // ) {}

  // ngOnInit() {
  //   this.title.setTitle('Liste des contacts');
  //   this.contacts$ = this.httpClient.get<Contact[]>('https://jsonplaceholder.typicode.com/users');
  // }

  contacts: Contact[];

  constructor(
    private title: Title,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.title.setTitle('Liste des contacts');
    this.contactService.getAll()
      .subscribe((contacts) => {
        this.contacts = contacts;
      });

    this.contactService.newContacts.subscribe((contact) => {
      this.contacts = [...this.contacts, contact];
    });
  }

}
