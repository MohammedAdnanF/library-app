import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, doc, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  currDate = new Date()

  newBook= {
    id: '18',
    title: 'dummy book',
    auther: 'just me',
    edition: 45,
    pages: 9874,
    publishdate: this.currDate
  }

  constructor(
    private firestore: Firestore
  ) { }

  getAll(): Observable<Book[]>{
    const col = collection(this.firestore, 'books');
    return collectionData(col, {idField: 'id'}) as Observable<Book[]>
  }

  addBook(book: Book){
    const cols = collection(this.firestore, 'books');
    return addDoc(cols, book);
  }
}
