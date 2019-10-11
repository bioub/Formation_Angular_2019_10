import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { FormsModule } from '@angular/forms';
// import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [ClockComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ClockComponent,
    CommonModule,
    FormsModule,
    // MatListModule
  ]
})
export class SharedModule { }
