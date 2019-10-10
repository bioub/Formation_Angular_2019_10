import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../model';
import { delay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
  ) { }
  contact: Contact;
  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.activatedRoute.paramMap
      .pipe(switchMap((paramMap) => {
        const id = paramMap.get('id');
        const url = 'https://jsonplaceholder.typicode.com/users/' + id;
        return this.httpClient.get<Contact>(url)
          .pipe(delay((id === '3' ? 3000 : 0)))
      }))
      .subscribe((contact) => {
        this.contact = contact;
      });
  }

}
