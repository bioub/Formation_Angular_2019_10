import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';


const routes: Routes = [{
  path: 'contacts',
  component: ContactsComponent,
  children: [{
    path: 'add', // URL -> /contacts/add
    component: ContactsAddComponent,
  }, {
    // mettre les routes avec params le plus bas possible
    path: ':id', // URL -> /contacts/123
    component: ContactsDetailsComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
