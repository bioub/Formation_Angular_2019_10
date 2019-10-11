import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  handleSubmit(event: Event) {
    // event.preventDefault();
  }
}
