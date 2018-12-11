import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { CategoryModel } from '../CategoryModel';
import { HttpClient } from '@angular/common/http';
import { FirebaseHelper } from '../firebase-helper';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private db = FirebaseHelper.getApp().firestore();

  constructor(private http: HttpClient) {}

  getAll(): Observable<CategoryModel[]> {
    const categories: CategoryModel[] = [];

    this.db.collection('Categories').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        categories.push({id: doc.id, ...doc.data()});
      });
    });

    return of(categories);
  }

  get(id: string): Observable<CategoryModel> {
    const category = new CategoryModel();

    this.db.collection('Categories').doc(id).get().then((doc) => {
      category.set({id: doc.id, ...doc.data()});
    });

    return of(category);
  }

  update(category: CategoryModel):Observable<CategoryModel> {
    const data = {...category};
    delete data.id;

    const promise = this.db.collection('Categories').doc(category.id).set({...data});

    return from(promise);
  }

  create(category: CategoryModel):Observable<CategoryModel> {
    return this.db.collection('Categories').add({...category});
  }

  delete(category: CategoryModel):Observable<CategoryModel> {
    const promise = this.db.collection('Categories').doc(category.id).delete();

    return from(promise);
  }
}
