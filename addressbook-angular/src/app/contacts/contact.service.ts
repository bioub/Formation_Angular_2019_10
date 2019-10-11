import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Contact } from "./model";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  constructor(private httpClient: HttpClient) {}

  getById(id): Observable<Contact> {
    const url = "https://jsonplaceholder.typicode.com/users/" + id;
    return this.httpClient.get<Contact>(url);
    // .pipe(delay((id === '3' ? 3000 : 0)))
  }
}
