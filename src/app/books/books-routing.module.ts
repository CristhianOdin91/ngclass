import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
    {
      path: 'books',
      component: BooksComponent
    }
  ])],
  exports: [RouterModule],
  providers: []
})

export class BooksRoutingModule{}
