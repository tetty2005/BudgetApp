import {Observable, of, from, forkJoin} from 'rxjs';
import { Category } from '../Models/Category';
import { FirebaseService } from './firebase.service';

export class CategoryService extends FirebaseService {
  protected collectionUrl;
  protected collectionRef;

  getCollectionUrl () {
    return this.collectionUrl;
  }

  getCollection () {
    if (!this.collectionRef) {
      this.collectionRef = this.getDb().collection(this.getCollectionUrl());
    }

    return this.collectionRef;
  }

  getAll(): Observable<Category[]> {
    return Observable.create((observer) => {
      const categories: Category[] = [];

      this.getCollection().get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          categories.push(new Category({id: doc.id, ...doc.data()}));
        });
        observer.next(categories);
      });
    });
  }

  get(id: string): Observable<Category> {
    const category = new Category();

    this.getCollection().doc(id).get().then((doc) => {
      category.set({id: doc.id, ...doc.data()});
    });

    return of(category);
  }

  update(category: Category): Observable<Category> {
    const promise = this.getCollection().doc(category.id).set(category.get());

    return from(promise);
  }

  create(category: Category): Observable<Category> {
    const promise = this.getCollection().add({...category});

    return from(promise);
  }

  createMany(categories: Category[]) {
    const observables = [];

    categories.forEach((category) => {
      observables.push(this.create(category.get()));
    });

    return forkJoin(observables);
  }

  delete(category: Category): Observable<Category> {
    const promise = this.getCollection().doc(category.id).delete();

    return from(promise);
  }
}
