import { Component } from '@angular/core';

import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  //styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public books;

  constructor(
    private booksService:BooksService
  ){}

  ngOnInit(){
    this.booksService.getBooks()
                     .subscribe(
                       response => this.books = response,
                       error => console.error(error)
                     );
  }

  ngOnDestroy(){
    console.log('El componente fue destruido');
  }

  public destroyBook(id:number)
  {
    console.log('El libro con ID '+id+' fue eliminado');
  }

}
