import { Component, OnInit, DebugElement, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('inputPrenom', {static: true}) inputPrenom: DebugElement;
  // @ContentChild('')

  contact = {
    prenom: 'Romain',
    nom: 'Bohdanowicz',
  };

  constructor() { }

  ngOnInit() {
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    console.log(this.inputPrenom.nativeElement.value);
  }
}
