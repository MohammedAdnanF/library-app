import { Component, OnInit } from '@angular/core';
import { doc, Timestamp } from '@angular/fire/firestore';
import { Book } from './shared/book';
import { BooksService } from './shared/books.service';

@Component({
  selector: 'lib-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library';

  books: Book[] = [];
  date = new Date();

  constructor(
    private booksService: BooksService
  ){}

  OnInit(){

  }

  ngOnInit(): void{
    // this.booksService.getAll()
    // .subscribe(data => {
    //   this.books = data;
    // });

    // this.booksService.addBook(this.booksService.newBook as Book);

    // console.log(this.books)
  }

  // getdate(timestamp: Date){
  //   return timestamp.toDate()
  // }

}
