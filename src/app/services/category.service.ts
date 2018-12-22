import {Observable, of, from, forkJoin} from 'rxjs';
import { CategoryModel } from '../Models/CategoryModel';
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

  getAll(): Observable<CategoryModel[]> {
    return Observable.create((observer) => {
      const categories: CategoryModel[] = [];

      this.getCollection().get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          categories.push(new CategoryModel({id: doc.id, ...doc.data()}));
        });
        observer.next(categories);
      });
    });
  }

  get(id: string): Observable<CategoryModel> {
    const category = new CategoryModel();

    this.getCollection().doc(id).get().then((doc) => {
      category.set({id: doc.id, ...doc.data()});
    });

    return of(category);
  }

  update(category: CategoryModel): Observable<CategoryModel> {
    const promise = this.getCollection().doc(category.id).set(category.get());

    return from(promise);
  }

  create(category: CategoryModel): Observable<CategoryModel> {
    const promise = this.getCollection().add({...category});

    return from(promise);
  }

  createMany(categories: CategoryModel[]) {
    const observables = [];

    categories.forEach((category) => {
      observables.push(this.create(category.get()));
    });

    return forkJoin(observables);
  }

  delete(category: CategoryModel): Observable<CategoryModel> {
    const promise = this.getCollection().doc(category.id).delete();

    return from(promise);
  }
}
