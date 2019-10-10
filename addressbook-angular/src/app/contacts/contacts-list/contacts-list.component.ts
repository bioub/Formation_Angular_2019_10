import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from "@angular/common/http";
import { Contact } from '../model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(
    private title: Title,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.title.setTitle('Liste des contacts');
    this.httpClient.get<Contact[]>('https://jsonplaceholder.typicode.com/users')
        .subscribe((contacts) => {
          this.contacts = contacts// .map((c) => ({id: c.id, name: c.name}));
        });
  }

}
