import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContactsRoutingModule } from "./contacts-routing.module";
import { ContactsListComponent } from "./contacts-list/contacts-list.component";
import { ContactsAddComponent } from "./contacts-add/contacts-add.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { ContactsDetailsComponent } from "./contacts-details/contacts-details.component";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContactsListComponent,
    ContactsAddComponent,
    ContactsComponent,
    ContactsDetailsComponent
  ],
  imports: [SharedModule, ContactsRoutingModule, MatListModule, MatButtonModule]
})
export class ContactsModule {}
