import {Observable, of, from, forkJoin} from 'rxjs';
import { FirebaseService } from './firebase.service';
import {ICategory} from '../Models/ICategory';



/// check git force

export class CategoryService<T extends ICategory> extends FirebaseService {
  protected collectionUrl;
  protected collectionRef;

  constructor(private modelClass: new(data) => T) {
    super();
  }

  getCollectionUrl () {
    return this.collectionUrl;
  }

  getCollection () {
    if (!this.collectionRef) {
      this.collectionRef = this.getDb().collection(this.getCollectionUrl());
    }

    return this.collectionRef;
  }

  getAll(): Observable<T[]> {
    return Observable.create((observer) => {
      const categories: T[] = [];

      this.getCollection().get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          categories.push(new this.modelClass({id: doc.id, ...doc.data()}));
        });
        observer.next(categories);
      });
    });
  }

  get(id: string): Observable<T> {
    const category = new this.modelClass(null);

    this.getCollection().doc(id).get().then((doc) => {
      category.set({id: doc.id, ...doc.data()});
    });

    return of(category);
  }

  update(category: T): Observable<T> {
    const promise = this.getCollection().doc(category.id).set(category.get());

    return from(promise);
  }

  create(category: T): Observable<T> {
    const promise = this.getCollection().add(category.get());

    return from(promise);
  }

  createMany(categories: T[]) {
    const observables = categories.map((category: T) => this.create(category));

    return forkJoin(observables);
  }

  delete(category: T): Observable<T> {
    const promise = this.getCollection().doc(category.id).delete();

    return from(promise);
  }
}
