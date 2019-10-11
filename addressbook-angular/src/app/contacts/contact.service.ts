import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Contact } from "./model";

@Injectable({
  providedIn: "root"
})
export class ContactService {

  newContacts = new EventEmitter<Contact>();

  constructor(private httpClient: HttpClient) {}

  // Exercice
  // créer une une méthode getAll
  // et l'appeller depuis contacts-list
  getAll() {
    return this.httpClient.get<Contact[]>('https://jsonplaceholder.typicode.com/users');
  }

  getById(id): Observable<Contact> {
    const url = "https://jsonplaceholder.typicode.com/users/" + id;
    return this.httpClient.get<Contact>(url);
    // .pipe(delay((id === '3' ? 3000 : 0)))
  }

  create(contact) {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient.post<Contact>(url, contact);
  }
}
