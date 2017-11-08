import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { BooksService } from './books.service';

import { BooksRoutingModule } from './books-routing.module';

import { BooksComponent } from './books.component';

@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    BooksRoutingModule
  ],
  exports: [
    BooksComponent,
    RouterModule
  ],
  providers: [
    BooksService
  ],
  bootstrap: [BooksComponent],
})
export class BooksModule { }
