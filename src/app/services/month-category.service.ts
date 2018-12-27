import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {CategoryService} from './category.service';
import {UserCategoryService} from './user-category.service';
import {CategoryModel} from '../Models/CategoryModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MonthCategoryService extends CategoryService {

  constructor(private authService: AuthService,
              private userCategoryService: UserCategoryService) {
    super();
  }

  getCollectionUrl () {
    if (!this.collectionUrl) {
      const user = this.authService.getUser();

      this.collectionUrl = 'Users/' + user.id + '/Categories';
    }

    return this.collectionUrl;
  }

  getAvailable(): Observable<CategoryModel[]> {
    return Observable.create((observer) => {
      const available: CategoryModel[] = [];

      this.userCategoryService.getAll().subscribe((userCategories: CategoryModel[]) => {
        userCategories.forEach((category) => {
          available.push(category);
        });
        observer.next(available);
      });
    });
  }
}
