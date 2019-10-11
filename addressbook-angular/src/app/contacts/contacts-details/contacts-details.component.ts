import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Contact } from "../model";
import { map, switchMap, tap } from "rxjs/operators";
import { Subscription } from "rxjs";
import { ContactService } from "../contact.service";

@Component({
  selector: "app-contacts-details",
  templateUrl: "./contacts-details.component.html",
  styleUrls: ["./contacts-details.component.scss"]
})
export class ContactsDetailsComponent implements OnInit {
  contact: Contact;
  subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.subscription = this.activatedRoute.paramMap
      .pipe(
        // tap((paramMap) => console.log(paramMap.get("id"))),
        map(paramMap => paramMap.get("id")),
        switchMap(id => this.contactService.getById(id))
      )
      .subscribe(contact => {
        this.contact = contact;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
