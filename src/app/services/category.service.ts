import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoryModel } from '../CategoryModel';
import { HttpClient } from '@angular/common/http';
import { FirebaseHelper } from '../firebase-helper';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  public url = 'http://5178c677.ngrok.io/api/categories';
  private db = FirebaseHelper.getApp().firestore();

  constructor(private http: HttpClient) {}

  getAll(): Observable<CategoryModel[]> {
    const categories: CategoryModel[] = [];
    this.db.collection('Categories').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        categories.push(doc.data());
        console.log('querySnapshot', `${doc.id} => ${doc.data()}`);
      });
      console.log('getAll categories', categories);
    });

    return of(categories);
  }

  create(category: CategoryModel):Observable<CategoryModel> {
    return this.db.collection('Categories').add(JSON.parse(JSON.stringify(category)));
  }

  onDelete(category: CategoryModel):Observable<CategoryModel> {
    let url = this.url + '/' + category.id;
    return this.http.delete<CategoryModel>(url);
  }
}
